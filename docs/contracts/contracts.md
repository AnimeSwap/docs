# Overview
Current docs works for the following **Aptos Devnet 20220921**:
- Devnet branch commit: `2b16401aa24688f1a6294f9ccde5386b9bf726d9`
- Docker image tag: `devnet_2b16401aa24688f1a6294f9ccde5386b9bf726d9`
- Docker image digest: `sha256:91c14fcab725ad893ba9544f439a7ef6836006e8ceb5f1dc910f0dfc4d293f23`
- genesis.blob `sha256: 2d94a1d3a11979f07de35e20833f0e11ac0fa1069c6dfc8d81625053cb989991`
- waypoint: `0:84af4624117de43a74ae59f05e90433788484edc063947ed871ca2d8e6ecf8dc`
- Chain ID: `32`

:::note
As Aptos Devnet is still in development and reset weekly, the above information may change in the future.
:::


:::tip
AnimeSwap has not deployed on Aptos Testnet yet.
:::

## Swap module
Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity.
* Module name: `0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2::AnimeSwapPoolV1`
* Deploy Account: [0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2](https://explorer.aptoslabs.com/account/0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2?network=Devnet)
* Deploy Transaction: [28915](https://explorer.aptoslabs.com/txn/28915?network=Devnet)

## MasterChef module
MasterChef module is about staking LP and coins to earn extra rewards.
* Module name: `0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1`
* Deploy Account: [0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78](https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Devnet)
* Deploy Transaction: [52573](https://explorer.aptoslabs.com/txn/52573?network=Devnet)
