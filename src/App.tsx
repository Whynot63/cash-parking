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
      <header className="intro">
        <img
          className="intro-icon"
          src="/coins-parking.png"
          alt=""
          width={96}
          height={96}
        />
        <div>
          <h1>Cash Parking</h1>
          <p>
            Compare rates across all Aave markets and park your cash in the
            most profitable one — without risking a deposit in some no-name
            DeFi protocol.
          </p>
        </div>
      </header>
      <CashPicker value={activeCash} onChange={setActiveCash} />
      {tokens.length === 0 ? (
        <p className="empty">No tokens</p>
      ) : (
        <ApyTable tokens={tokens} chainIds={chainIds} />
      )}
      <footer className="footer">
        Made by{' '}
        <a href="https://x.com/0xandreev" target="_blank" rel="noreferrer">
          @0xandreev
        </a>
      </footer>
    </main>
  )
}
