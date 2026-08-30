import { zeroAddress, type ContractFunctionReturnType } from 'viem'
import { useReadContracts } from 'wagmi'
import { poolAbi, pools } from './aave'
import { calculateAaveV3SupplyApy } from './lib/calculateAaveV3SupplyApy'
import type { Token } from './tokens'

export type ApysByToken = Record<string, Record<number, number>>

type Reserve = ContractFunctionReturnType<
  typeof poolAbi,
  'view',
  'getReserveData'
>

export function useChainApys(
  tokens: Token[],
  chainIds: number[],
): ApysByToken {
  const cells = tokens.flatMap(token =>
    chainIds
      .filter(chainId => pools[chainId] && token.addresses[chainId])
      .map(chainId => ({ token, chainId })),
  )

  const { data } = useReadContracts({
    contracts: cells.map(({ token, chainId }) => ({
      chainId,
      address: pools[chainId],
      abi: poolAbi,
      functionName: 'getReserveData',
      args: [token.addresses[chainId]],
    })),
    query: { staleTime: 60_000 },
  })

  const apys: ApysByToken = {}
  cells.forEach(({ token, chainId }, index) => {
    const reserve = data?.[index]?.result as Reserve | undefined
    if (!reserve || reserve.aTokenAddress === zeroAddress) return
    ;(apys[token.name] ??= {})[chainId] = calculateAaveV3SupplyApy(
      reserve.currentLiquidityRate,
    )
  })
  return apys
}
