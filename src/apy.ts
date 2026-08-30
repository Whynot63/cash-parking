import { useQuery } from '@tanstack/react-query'
import { zeroAddress, type ContractFunctionReturnType } from 'viem'
import { useReadContracts } from 'wagmi'
import { poolAbi, pools } from './aave'
import { calculateAaveV3SupplyApy } from './lib/calculateAaveV3SupplyApy'
import {
  calculateMerklSupplyRewards,
  fetchMerklOpportunities,
  type MerklRewards,
} from './merkl'
import type { Token } from './tokens'

export type ApyCell = { base: number; rewards?: MerklRewards }
export type ApysByToken = Record<string, Record<number, ApyCell>>

type Reserve = ContractFunctionReturnType<
  typeof poolAbi,
  'view',
  'getReserveData'
>

export function useChainApys(
  tokens: Token[],
  chainIds: number[],
): { apys: ApysByToken; isLoading: boolean } {
  const cells = tokens.flatMap(token =>
    chainIds
      .filter(chainId => pools[chainId] && token.addresses[chainId])
      .map(chainId => ({ token, chainId })),
  )

  const { data, isLoading } = useReadContracts({
    contracts: cells.map(({ token, chainId }) => ({
      chainId,
      address: pools[chainId],
      abi: poolAbi,
      functionName: 'getReserveData',
      args: [token.addresses[chainId]],
    })),
    query: { staleTime: 60_000 },
  })

  const { data: merklOpportunities } = useQuery({
    queryKey: ['merklOpportunities'],
    queryFn: fetchMerklOpportunities,
    staleTime: 5 * 60_000,
  })

  const apys: ApysByToken = {}
  cells.forEach(({ token, chainId }, index) => {
    const reserve = data?.[index]?.result as Reserve | undefined
    if (!reserve || reserve.aTokenAddress === zeroAddress) return
    const base = calculateAaveV3SupplyApy(reserve.currentLiquidityRate)
    const rewards = calculateMerklSupplyRewards(
      merklOpportunities ?? [],
      chainId,
      reserve.aTokenAddress,
      base,
    )
    ;(apys[token.name] ??= {})[chainId] = rewards ? { base, rewards } : { base }
  })
  return { apys, isLoading }
}
