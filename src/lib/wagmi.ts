import type { Transport } from 'viem'
import { createConfig, http } from 'wagmi'
import { chains } from '../tokens'

export const config = createConfig({
  chains,
  transports: Object.fromEntries(
    chains.map(chain => [chain.id, http()]),
  ) as Record<(typeof chains)[number]['id'], Transport>,
})
