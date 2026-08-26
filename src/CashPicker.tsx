import type { TokenCashKey } from './tokens'

const labels: Record<TokenCashKey, string> = {
  usd: 'USD',
  eth: 'ETH',
  btc: 'BTC',
  other: 'Other',
  all: 'All',
}

const cashKeys = Object.keys(labels) as TokenCashKey[]

export function CashPicker({
  value,
  onChange,
}: {
  value: TokenCashKey
  onChange: (key: TokenCashKey) => void
}) {
  return (
    <div className="cash-picker">
      <div className="cash-picker-buttons">
        {cashKeys.map(key => (
          <button
            key={key}
            className={key === value ? 'active' : ''}
            onClick={() => onChange(key)}
          >
            {labels[key]}
          </button>
        ))}
      </div>
    </div>
  )
}
