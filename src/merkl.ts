import type { Address } from 'viem'

const MERKL_HOST = import.meta.env.DEV ? '/merkl-api' : 'https://api.merkl.xyz'
const MERKL_ENDPOINT = `${MERKL_HOST}/v4/opportunities?mainProtocolId=aave&items=100&status=LIVE`

export type MerklOpportunity = {
  chainId: number
  action: string
  status: string
  explorerAddress?: Address
  aprRecord: { breakdowns: { value: number; distributionType: string }[] }
  rewardsRecord: {
    breakdowns: { token: { symbol: string; verified: boolean } }[]
  }
}

export async function fetchMerklOpportunities(): Promise<MerklOpportunity[]> {
  const response = await fetch(MERKL_ENDPOINT)
  return response.json()
}

const aprToApy = (apr: number) => (1 + apr / 12) ** 12 - 1
const apyToApr = (apy: number) => 12 * ((1 + apy) ** (1 / 12) - 1)

export type MerklRewards = { apy: number; symbols: string[] }

export function calculateMerklSupplyRewards(
  opportunities: MerklOpportunity[],
  chainId: number,
  aToken: Address,
  baseSupplyApy: number,
): MerklRewards | undefined {
  const matching = opportunities.filter(
    opp =>
      opp.chainId === chainId &&
      opp.action === 'LEND' &&
      opp.status === 'LIVE' &&
      opp.explorerAddress?.toLowerCase() === aToken.toLowerCase() &&
      opp.rewardsRecord.breakdowns.some(reward => reward.token.verified),
  )
  if (matching.length === 0) return undefined

  const totalApr = matching
    .flatMap(opp => opp.aprRecord.breakdowns)
    .reduce((sum, breakdown) => {
      const apr = breakdown.value / 100
      if (breakdown.distributionType.endsWith('NET_APR')) {
        return sum + apyToApr(Math.max(aprToApy(apr) - baseSupplyApy / 100, 0))
      }
      return sum + apr
    }, 0)
  if (totalApr <= 0) return undefined

  const symbols = [
    ...new Set(
      matching.flatMap(opp =>
        opp.rewardsRecord.breakdowns
          .filter(reward => reward.token.verified)
          .map(reward => reward.token.symbol),
      ),
    ),
  ]
  return { apy: aprToApy(totalApr) * 100, symbols }
}
