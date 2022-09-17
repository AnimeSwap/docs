# Overview
Current docs works for the following **Aptos Devnet 20220916**:
- Devnet branch commit: `971c160079263a8d3e1d2503a570b01ecaaf10ba`
- Docker image tag: `devnet_971c160079263a8d3e1d2503a570b01ecaaf10ba`
- Docker image digest: `sha256:cb4ccecc998fcae3aa291cff8dceaa6353c669ee0c4a53c09f955c5f37d1fb76`
- genesis.blob `sha256:e2daf2aeeb5d7f9ec14c9dab29e7e5486293d1ec77482011a1c43577efebcb09`
- waypoint: `0:aacefbef2e097b307993c6c4d6806f4648a436c59c2e6488f13d7d76ef2fdc0c`
- Chain ID: `31`

:::note
As Aptos Devnet is still in development and reset weekly, the above information may change in the future.
:::


:::tip
AnimeSwap has not deployed on Aptos Testnet yet.
:::

## Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Module name: `0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2::AnimeSwapPoolV1`
* Deploy Account: [0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2](https://explorer.devnet.aptos.dev/account/0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2)
* Deploy Transaction: [106623](https://explorer.devnet.aptos.dev/txn/106623)

## MasterChef module
MasterChef module is about staking LP and coins to earn extra rewards.
* Module name: `0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1`
* Deploy Account: [0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78](https://explorer.devnet.aptos.dev/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78)
* Deploy Transaction: [115044](https://explorer.devnet.aptos.dev/txn/115044)