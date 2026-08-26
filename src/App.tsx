import { useState } from 'react'
import { ApyTable } from './ApyTable'
import { CashPicker } from './CashPicker'
import { chains, tokenCashes, type TokenCashKey } from './tokens'

const chainIds = chains.map(chain => chain.id)

export default function App() {
  const [activeCash, setActiveCash] = useState<TokenCashKey>('usd')
  const tokens = tokenCashes[activeCash]

  return (
    <main>
      <CashPicker value={activeCash} onChange={setActiveCash} />
      {tokens.length === 0 ? (
        <p className="empty">No tokens</p>
      ) : (
        <ApyTable tokens={tokens} chainIds={chainIds} />
      )}
    </main>
  )
}
