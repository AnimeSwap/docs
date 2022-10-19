# Overview
:::note
As Aptos Devnet is still in development and reset weekly, the above information may change in the future.
:::

:::tip
All contracts use two accounts, `Deploy Account` and `Resource Account`.
`Deploy Account` is used for contract ABI, and `Resource Account` is used for keeping resources.
:::

## Mainnet
### Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Github repo: [v1-core](https://github.com/AnimeSwap/v1-core/tree/v1.0.0)
* Module name: `0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1`
* Deploy Account: [0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c](https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=mainnet)
* Resource Account: [0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf](https://explorer.aptoslabs.com/account/0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf?network=mainnet)

### MasterChef module
We have not deployed yet.

------

## Devnet
Current docs works for the following **Aptos Devnet 20221014**:
- Devnet branch commit: `83641d3f083762f31700060e5e95fbb1cbc28bf0`
- Docker image tag: `devnet_83641d3f083762f31700060e5e95fbb1cbc28bf0`
- Docker image digest: `sha256:9dc89a374f1b8856953f397b4e4efa57d0452d64d5b05f191b7ea8a56433f01b`
- genesis.blob sha256: `72bc82aa47f267d8fc0e1bd9b4c056d051d0cabd5434c9a6904ea36a129e8c85`
- waypoint: `0:a14d119d7ba841c99354d8cb3fb274a1879a0a1fc1308d41d1797b80f3dd675b`
- Chain ID: `34`

### Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Github repo: [v1-core](https://github.com/AnimeSwap/v1-core/tree/v0.4.0)
* Module name: `0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1`
* Deploy Account: [0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c](https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=Devnet)
* Resource Account: [0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf](https://explorer.aptoslabs.com/account/0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf?network=Devnet)

### MasterChef module
MasterChef module is about staking LP and coins to earn extra rewards.
* Github repo: [v1-staking](https://github.com/AnimeSwap/v1-staking)
* Module name: `0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1`
* Deploy Account: [0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78](https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Devnet)
* Resource Account: [0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a](https://explorer.aptoslabs.com/account/0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a?network=Devnet)

------

## Testnet

### Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Github repo: [v1-core](https://github.com/AnimeSwap/v1-core)
* Module name: `0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1f1`
* Deploy Account: [0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c](https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=Testnet)
* Resource Account: [0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf](https://explorer.aptoslabs.com/account/0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf?network=Testnet)

### MasterChef module
MasterChef module is about staking LP and coins to earn extra rewards.
* Github repo: [v1-staking](https://github.com/AnimeSwap/v1-staking)
* Module name: `0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1`
* Deploy Account: [0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78](https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Testnet)
* Resource Account: [0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a](https://explorer.aptoslabs.com/account/0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a?network=Testnet)
