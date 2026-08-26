import { calculateApysForChains } from './apy'
import { chains, type Token } from './tokens'

const chainName = (id: number) =>
  chains.find(chain => chain.id === id)?.name ?? String(id)

const bestApy = (tokenApys?: Record<number, number>) => {
  let best: { chainId: number; apy: number } | undefined
  for (const [id, apy] of Object.entries(tokenApys ?? {})) {
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
  const apys = calculateApysForChains(tokens, chainIds)

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
                  const apy = tokenApys?.[id]
                  return (
                    <td key={id}>
                      {apy === undefined ? '—' : `${apy.toFixed(2)} %`}
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
