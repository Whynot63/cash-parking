import type { Address } from 'viem'
import { base, mainnet } from 'viem/chains'

export type Token = {
  name: string
  addresses: Record<number, Address>
}

const usd: Token[] = [
  {
    name: 'USDT',
    addresses: {
      [mainnet.id]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
  },
  {
    name: 'USDC',
    addresses: {
      [mainnet.id]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      [base.id]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    },
  },
]

const eth: Token[] = [
  {
    name: 'WETH',
    addresses: {
      [mainnet.id]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      [base.id]: '0x4200000000000000000000000000000000000006',
    },
  },
]

const btc: Token[] = []
const other: Token[] = []

export const tokenCashes = {
  usd,
  eth,
  btc,
  other,
  all: [...usd, ...eth, ...btc, ...other],
}

export type TokenCashKey = keyof typeof tokenCashes
