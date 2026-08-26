import { useState } from 'react'
import { base, mainnet } from 'viem/chains'
import { CashPicker } from './CashPicker'
import { tokenCashes, type TokenCashKey } from './tokens'

const chains = [mainnet, base]

const short = (address: string) => `${address.slice(0, 6)}…${address.slice(-4)}`

export default function App() {
  const [activeCash, setActiveCash] = useState<TokenCashKey>('usd')
  const tokens = tokenCashes[activeCash]

  return (
    <main>
      <CashPicker value={activeCash} onChange={setActiveCash} />
      {tokens.length === 0 ? (
        <p className="empty">No tokens</p>
      ) : (
        <ul className="tokens">
          {tokens.map(token => (
            <li key={token.name}>
              <strong>{token.name}</strong>
              {chains.map(chain => {
                const address = token.addresses[chain.id]
                return (
                  <span key={chain.id} className="addr">
                    {chain.name}: {address ? short(address) : '—'}
                  </span>
                )
              })}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
