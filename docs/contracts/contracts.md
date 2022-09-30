# Overview
Current docs works for the following **Aptos Devnet 20220930**:
- Devnet branch commit: `afa8e736ab33aadf1053354fafa9c1a7fdd18e6b`
- Docker image tag: `devnet_afa8e736ab33aadf1053354fafa9c1a7fdd18e6b`
- Docker image digest: `sha256:b0277cb86e26ec7959f2fdf42f1bde9ec172888b4dc902bdb8e0afce2950c00f`
- genesis.blob sha256: `09a9f514484e177ac8df48099ec0e4f17562fed67a3e351fd4e29e45d7e55abc`
- waypoint: `0:03f0fe3d8c2933fa4705169ffd2316bf1ce7813a19478267ac2937e3b6ac0cb3`
- Chain ID: `33`

:::note
As Aptos Devnet is still in development and reset weekly, the above information may change in the future.
:::


:::tip
AnimeSwap has not deployed on Aptos Testnet yet.
:::

## Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Gihub repo: [https://github.com/AnimeSwap/v1-core](v1-core)
* Module name: `0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1`
* Deploy Account: [0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c](https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=Devnet)
* Deploy Transaction: [175704](https://explorer.aptoslabs.com/txn/175704?network=Devnet)

## MasterChef module
MasterChef module is about staking LP and coins to earn extra rewards.
* Gihub repo: [https://github.com/AnimeSwap/v1-staking](v1-staking)
* Module name: `0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1`
* Deploy Account: [0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78](https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Devnet)
* Deploy Transaction: [216350](https://explorer.aptoslabs.com/txn/216350?network=Devnet)
