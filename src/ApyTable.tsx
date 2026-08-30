import { useChainApys, type ApyCell } from './apy'
import { chains, type Token } from './tokens'

const chainName = (id: number) =>
  chains.find(chain => chain.id === id)?.name ?? String(id)

const totalApy = (cell: ApyCell) => cell.base + (cell.rewards?.apy ?? 0)

const bestApy = (tokenApys?: Record<number, ApyCell>) => {
  let best: { chainId: number; apy: number } | undefined
  for (const [id, cell] of Object.entries(tokenApys ?? {})) {
    const apy = totalApy(cell)
    if (!best || apy > best.apy) best = { chainId: Number(id), apy }
  }
  return best
}

export function ApyTable({
  tokens,
  chainIds,
}: {
  tokens: Token[]
  chainIds: number[]
}) {
  const { apys, isLoading } = useChainApys(tokens, chainIds)

  return (
    <div className="apy-table-wrap">
      <table className="apy-table">
        <thead>
          <tr>
            <th>Asset</th>
            {chainIds.map(id => (
              <th key={id}>{chainName(id)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tokens.map(token => {
            const tokenApys = apys[token.name]
            const best = bestApy(tokenApys)
            return (
              <tr key={token.name}>
                <td>
                  {token.name}
                  {best && (
                    <span className="best">
                      {chainName(best.chainId)} — {best.apy.toFixed(2)}%
                    </span>
                  )}
                </td>
                {chainIds.map(id => {
                  const cell = tokenApys?.[id]
                  return (
                    <td key={id}>
                      {cell === undefined ? (
                        isLoading && token.addresses[id] ? (
                          <span className="skeleton" />
                        ) : (
                          '—'
                        )
                      ) : (
                        <>
                          {totalApy(cell).toFixed(2)} %
                          {cell.rewards && (
                            <span className="rewards">
                              +{cell.rewards.apy.toFixed(2)}%{' '}
                              {cell.rewards.symbols.join('+')}
                            </span>
                          )}
                        </>
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
