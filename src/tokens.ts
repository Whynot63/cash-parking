import type { Address } from 'viem'
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  celo,
  gnosis,
  ink,
  linea,
  mainnet,
  mantle,
  megaeth,
  metis,
  optimism,
  plasma,
  polygon,
  scroll,
  soneium,
  sonic,
  zksync,
} from 'viem/chains'

export const chains = [mainnet, arbitrum, avalanche, base, bsc, celo, gnosis, ink, linea, mantle, megaeth, metis, optimism, plasma, polygon, scroll, soneium, sonic, zksync]

export type Token = {
  name: string
  addresses: Record<number, Address>
}

const usd: Token[] = [
  {
    name: 'USDT',
    addresses: {
      [mainnet.id]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      [arbitrum.id]: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      [avalanche.id]: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
      [bsc.id]: '0x55d398326f99059fF775485246999027B3197955',
      [celo.id]: '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
      [ink.id]: '0x0200C29006150606B650577BBE7B6248F58470c1',
      [linea.id]: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
      [mantle.id]: '0x779Ded0c9e1022225f8E0630b35a9b54bE713736',
      [megaeth.id]: '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb',
      [optimism.id]: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
      [plasma.id]: '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb',
      [polygon.id]: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      [soneium.id]: '0x3A337a6adA9d885b6Ad95ec48F9b75f197b5AE35',
      [zksync.id]: '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C',
    },
  },
  {
    name: 'USDC',
    addresses: {
      [mainnet.id]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      [arbitrum.id]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      [avalanche.id]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      [base.id]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      [bsc.id]: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      [celo.id]: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
      [gnosis.id]: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
      [ink.id]: '0x2D270e6886d130D724215A266106e6832161EAEd',
      [linea.id]: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
      [mantle.id]: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
      [optimism.id]: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      [polygon.id]: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      [scroll.id]: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
      [soneium.id]: '0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369',
      [sonic.id]: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
      [zksync.id]: '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
    },
  },
  {
    name: 'DAI',
    addresses: {
      [mainnet.id]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      [arbitrum.id]: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      [avalanche.id]: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
      [optimism.id]: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      [polygon.id]: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    },
  },
  {
    name: 'USDS',
    addresses: {
      [mainnet.id]: '0xdC035D45d973E3EC169d2276DDab16f1e407384F',
    },
  },
  {
    name: 'USDe',
    addresses: {
      [mainnet.id]: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
      [avalanche.id]: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
      [mantle.id]: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
      [plasma.id]: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
    },
  },
  {
    name: 'PYUSD',
    addresses: {
      [mainnet.id]: '0x6c3ea9036406852006290770BEdFcAbA0e23A0e8',
    },
  },
  {
    name: 'GHO',
    addresses: {
      [mainnet.id]: '0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f',
      [arbitrum.id]: '0x7dfF72693f6A4149b17e7C6314655f6A9F7c8B33',
      [avalanche.id]: '0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73',
      [base.id]: '0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee',
      [gnosis.id]: '0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73',
      [ink.id]: '0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73',
      [mantle.id]: '0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73',
    },
  },
]

const eth: Token[] = [
  {
    name: 'WETH',
    addresses: {
      [mainnet.id]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      [arbitrum.id]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      [avalanche.id]: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
      [base.id]: '0x4200000000000000000000000000000000000006',
      [bsc.id]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      [celo.id]: '0xD221812de1BD094f35587EE8E174B07B6167D9Af',
      [gnosis.id]: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
      [ink.id]: '0x4200000000000000000000000000000000000006',
      [linea.id]: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
      [mantle.id]: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
      [megaeth.id]: '0x4200000000000000000000000000000000000006',
      [metis.id]: '0x420000000000000000000000000000000000000A',
      [optimism.id]: '0x4200000000000000000000000000000000000006',
      [plasma.id]: '0x9895D81bB462A195b4922ED7De0e3ACD007c32CB',
      [polygon.id]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      [scroll.id]: '0x5300000000000000000000000000000000000004',
      [soneium.id]: '0x4200000000000000000000000000000000000006',
      [sonic.id]: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
      [zksync.id]: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
    },
  },
  {
    name: 'wstETH',
    addresses: {
      [mainnet.id]: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      [arbitrum.id]: '0x5979D7b546E38E414F7E9822514be443A4800529',
      [base.id]: '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
      [bsc.id]: '0x26c5e01524d2E6280A48F2c50fF6De7e52E9611C',
      [gnosis.id]: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
      [linea.id]: '0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F',
      [megaeth.id]: '0x601aC63637933D88285A025C685AC4e9a92a98dA',
      [optimism.id]: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
      [plasma.id]: '0xe48D935e6C9e735463ccCf29a7F11e32bC09136E',
      [polygon.id]: '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD',
      [scroll.id]: '0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32',
      [zksync.id]: '0x703b52F2b28fEbcB60E1372858AF5b18849FE867',
    },
  },
  {
    name: 'weETH',
    addresses: {
      [mainnet.id]: '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee',
      [arbitrum.id]: '0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe',
      [base.id]: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
      [ink.id]: '0xA3D68b74bF0528fdD07263c60d6488749044914b',
      [linea.id]: '0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6',
      [plasma.id]: '0xA3D68b74bF0528fdD07263c60d6488749044914b',
      [scroll.id]: '0x01f0a31698C4d065659b9bdC21B3610292a1c506',
      [zksync.id]: '0xc1Fa6E2E8667d9bE0Ca938a54c7E0285E9Df924a',
    },
  },
  {
    name: 'cbETH',
    addresses: {
      [mainnet.id]: '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704',
      [base.id]: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    },
  },
  {
    name: 'rETH',
    addresses: {
      [mainnet.id]: '0xae78736Cd615f374D3085123A210448E74Fc6393',
      [arbitrum.id]: '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8',
      [optimism.id]: '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D',
    },
  },
]

const btc: Token[] = [
  {
    name: 'WBTC',
    addresses: {
      [mainnet.id]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      [arbitrum.id]: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      [avalanche.id]: '0x50b7545627a5162F82A992c33b87aDc75187B218',
      [linea.id]: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
      [optimism.id]: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
      [polygon.id]: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    },
  },
  {
    name: 'cbBTC',
    addresses: {
      [mainnet.id]: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
      [base.id]: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
    },
  },
  {
    name: 'tBTC',
    addresses: {
      [mainnet.id]: '0x18084fbA666a33d37592fA2633fD49a74DD93a88',
      [arbitrum.id]: '0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40',
      [base.id]: '0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b',
    },
  },
  {
    name: 'LBTC',
    addresses: {
      [mainnet.id]: '0x8236a87084f8B84306f72007F36F2618A5634494',
      [base.id]: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
    },
  },
]

const other: Token[] = [
  {
    name: 'AAVE',
    addresses: {
      [mainnet.id]: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      [arbitrum.id]: '0xba5DdD1f9d7F570dc94a51479a000E3BCE967196',
      [avalanche.id]: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9',
      [base.id]: '0x63706e401c06ac8513145b7687A14804d17f814b',
      [optimism.id]: '0x76FB31fb4af56892A25e32cFC43De717950c9278',
      [polygon.id]: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    },
  },
  {
    name: 'LINK',
    addresses: {
      [mainnet.id]: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      [arbitrum.id]: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
      [avalanche.id]: '0x5947BB275c521040051D82396192181b413227A3',
      [optimism.id]: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
      [polygon.id]: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    },
  },
]

export const tokenCashes = {
  usd,
  eth,
  btc,
  other,
  all: [...usd, ...eth, ...btc, ...other],
}

export type TokenCashKey = keyof typeof tokenCashes
