import { useEffect, useState } from 'react'
import { AaveV3Ethereum } from '@bgd-labs/aave-address-book'
import { publicClient } from './lib/client'

export default function App() {
  const [blockNumber, setBlockNumber] = useState<bigint>()

  useEffect(() => {
    publicClient.getBlockNumber().then(setBlockNumber)
  }, [])

  return (
    <main>
      <h1>cash-parking</h1>
      <p>{blockNumber === undefined ? 'Loading…' : `Mainnet block: ${blockNumber}`}</p>
      <p>Aave v3 Pool: {AaveV3Ethereum.POOL}</p>
    </main>
  )
}
