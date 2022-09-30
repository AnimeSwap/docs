# Overview
:::note
As Aptos Devnet is still in development and reset weekly, the above information may change in the future.
:::

:::tip
All contracts use two accounts, `Deploy Account` and `Resource Account`.
`Deploy Account` is used for contract ABI, and `Resource Account` is used for keeping resources.
:::

## Devnet
Current docs works for the following **Aptos Devnet 20220930**:
- Devnet branch commit: `afa8e736ab33aadf1053354fafa9c1a7fdd18e6b`
- Docker image tag: `devnet_afa8e736ab33aadf1053354fafa9c1a7fdd18e6b`
- Docker image digest: `sha256:b0277cb86e26ec7959f2fdf42f1bde9ec172888b4dc902bdb8e0afce2950c00f`
- genesis.blob sha256: `09a9f514484e177ac8df48099ec0e4f17562fed67a3e351fd4e29e45d7e55abc`
- waypoint: `0:03f0fe3d8c2933fa4705169ffd2316bf1ce7813a19478267ac2937e3b6ac0cb3`
- Chain ID: `33`

### Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Github repo: [v1-core](https://github.com/AnimeSwap/v1-core)
* Module name: `0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1`
* Deploy Account: [0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c](https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=Devnet)
* Resource Account: [0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2](https://explorer.aptoslabs.com/account/0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2?network=Devnet)

### MasterChef module
MasterChef module is about staking LP and coins to earn extra rewards.
* Github repo: [v1-staking](https://github.com/AnimeSwap/v1-staking)
* Module name: `0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1`
* Deploy Account: [0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78](https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Devnet)
* Resource Account: [0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a](https://explorer.aptoslabs.com/account/0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a?network=Devnet)


## Testnet

### Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Github repo: [v1-core](https://github.com/AnimeSwap/v1-core)
* Module name: `0xf920ce46ae9befa1639ef751053ce5f3de5e526df6d598ef384880faaf6eac27::AnimeSwapPoolV1`
* Deploy Account: [0xf920ce46ae9befa1639ef751053ce5f3de5e526df6d598ef384880faaf6eac27](https://explorer.aptoslabs.com/account/0xf920ce46ae9befa1639ef751053ce5f3de5e526df6d598ef384880faaf6eac27?network=Testnet)
* Resource Account: [0xa4d0dab8e82ad65438ed171205c7322eb691285164e39668c1ecd3e944cef80d](https://explorer.aptoslabs.com/account/0xa4d0dab8e82ad65438ed171205c7322eb691285164e39668c1ecd3e944cef80d?network=Testnet)

### MasterChef module
MasterChef module is about staking LP and coins to earn extra rewards.
* Github repo: [v1-staking](https://github.com/AnimeSwap/v1-staking)
* Module name: `0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1`
* Deploy Account: [0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78](https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Testnet)
* Resource Account: [0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a](https://explorer.aptoslabs.com/account/0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a?network=Testnet)
