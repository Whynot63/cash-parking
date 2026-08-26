import type { Token } from './tokens'

export type ApysByToken = Record<string, Record<number, number>>

export function calculateApysForChains(
  tokens: Token[],
  chainIds: number[],
): ApysByToken {
  const apys: ApysByToken = {}
  for (const token of tokens) {
    apys[token.name] = {}
    for (const chainId of chainIds) {
      if (token.addresses[chainId]) {
        apys[token.name][chainId] = 3 + Math.random() * 5
      }
    }
  }
  return apys
}
