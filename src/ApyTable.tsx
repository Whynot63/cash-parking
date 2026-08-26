import { calculateApysForChains } from './apy'
import { chains, type Token } from './tokens'

const chainName = (id: number) =>
  chains.find(chain => chain.id === id)?.name ?? String(id)

export function ApyTable({
  tokens,
  chainIds,
}: {
  tokens: Token[]
  chainIds: number[]
}) {
  const apys = calculateApysForChains(tokens, chainIds)

  return (
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
        {tokens.map(token => (
          <tr key={token.name}>
            <td>{token.name}</td>
            {chainIds.map(id => {
              const apy = apys[token.name]?.[id]
              return (
                <td key={id}>{apy === undefined ? '—' : `${apy.toFixed(2)} %`}</td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
