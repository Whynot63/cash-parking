const RAY = 1e27
const SECONDS_PER_YEAR = 31_536_000

export function calculateAaveV3SupplyApy(liquidityRate: bigint): number {
  const ratePerSecond = Number(liquidityRate) / RAY / SECONDS_PER_YEAR
  return ((1 + ratePerSecond) ** SECONDS_PER_YEAR - 1) * 100
}
