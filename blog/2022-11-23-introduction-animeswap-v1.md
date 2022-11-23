---
slug: animeswap-v1
title: Introducing AnimeSwap v1
authors: [azard]
tags: [animeswap,protocol,intruduction]
---

**AnimeSwap v1** is a protocol of decentralized exchange (DEX) and automated market maker (AMM) runs on Move Virtual Machine. Anyone could interact with the protocol for swaping coins and earn coins.

AnimeSwap protocol has three basic usages:

* **Swap**: create a completely free trading experience for everyone.
* **Earn**: earn with automated market maker in a easiest way, more profit, less loss.
* **Build**: as a public protocol that every DApp, every tools  and every one could connect, as a infrastructure to improve on-chain liquidity.

# The Model
```
x * y = k
```

AnimeSwap not including multiple model in one protocol, only using one model, and the model is the core of the protocol.

`x * y = k` AMM model is widely used because of [Uniswap v2](https://docs.uniswap.org/contracts/v2/overview), its a very generic AMM model and amolst suitable for  all scenarios.

Each trade pair including exactly two coins in order of address alphabet.
On the other hand, each two coins has match one exactly trade pair if the pair has been created.

Some special scenario such as two different USD stable coins, its price is more relatively and in most time 1:1.
Other models like [Curve](https://curve.fi/) and [Uniswap v3](https://docs.uniswap.org/contracts/v3/overview) can provide higher liquidity efficiency.

But for early Aptos network, relative pair is not very important and not widely used, so AnimeSwap v1 choose the only one model to keep simple and uniform.

Swap model contract open source code and documents [check here](/docs/contracts).

# Anyone Can Create Pool

Another very important feature of AnimeSwap v1 is that anyone can create a pool.

Learning from Uniswap's success, one of the key feature is permisionless. Which means thousands of trade pairs can be created by anyone,
and if the pair has been added liquidity by anyone it could swap.

AnimeSwap Labs only developing the protocol, not managing the protocol, keeping AnimeSwap protocol **decentralized**. 

# Swap Fee and DAO

Liquidity providers need incentives, they provide tokens (lock value) and may bear [impermanent loss](https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm), swap fee to reward liquidity providers is AMM basic loop and feature.

AnimeSwap v1 swap fee is `0.3%`, which is the same as Uniswap v2, More specific:

* `0.25%` swap fee distributed to liquidity providers as reward via adding LP token value directly.
* `0.05%` swap fee distributed to AnimeSwap DAO and locked into pairs as LP token.

AnimeSwap v1 Swap fee maybe change in the future if that can improve the protocol, all changes will be [voted by AnimeSwap DAO](/docs/tutorial/Tokenomics#vote-and-governance). 

AnimeSwap has no IDO, all intial `ANI` token airdrop. AnimeSwap DAO is used to better building the AnimeSwap protocol via rewarding builders.
If DAO fee accumulated too much and not used, it will be keep lock as LP token to provide liquidity or **buyback** `ANI` and **burn**.

For more details about DAO usages [check here](/docs/tutorial/Tokenomics#dao-treasury).

# Flash Swap

AnimeSwap supports Flash Swap, [here is Flash Swap example](/docs/contracts/Swap/swap_examples#flash-swap-example).

Flash Swap is a very important feature of AMM, it could be used for arbitrage, liquidation, and other scenarios.

A person can use pool funds to arbitrage or repay loans in a single transaction without additional principal.

Simply put, it can better improve the efficiency of liquidity utilization and provide liquidity providers with higher rewards.

Here is a good article about flash swap: [All About DeFi Flash Loans](https://pontem.network/posts/all-about-defi-flash-loans).

:::info
`Flash Loans` is another name of `Flash Swap`, they are the same thing.
:::

# Route

Give a simple scenario, there are three pools (pairs): `A<>B`, `B<>C`, `C<>D`, and the user wants to swap `A` to `D`.

For some contracts has no route supports, user need make three transactions or make one big transactions to wrap three step transactions, it cost high gas fee.

AnimeSwap supports inline route ABI for such scenario to make simple route swap and cost less gas fee.

What's more, AnimeSwap interface has a visualization of route swap.
For more about route comparison and AnimeSwap advences, read [Aptos Dex Gas and Feature Comparison](/blog/dex-comparison).

# GAS Friendly

AnimeSwap Labs spents a lot of time to optimize the [Move contract](https://github.com/AnimeSwap/v1-core) and make AnimeSwap v1 protocol the most GAS friendly protocol.

AnimeSwap v1 protocol [core contract](https://github.com/AnimeSwap/v1-core) has become the best example for learning the Move contract

For more about GAS comparison and AnimeSwap advences, read [Aptos Dex Gas and Feature Comparison](/blog/dex-comparison#gas-units-cost-comparison).

# Future Upgrade

DeFi is fast evolving, and AnimeSwap will keep evolving.
If there are better direction for ecosystem growth, AnimeSwap Labs will create and deploy AnimeSwap v2 protocols as upgrade, all decision making via [vote-and-governance](/docs/tutorial/Tokenomics#vote-and-governance).

Anyway, AnimeSwap v1 has been deploy on Aptos mainnet and it will live as long as Aptos network.

From the time this article was written, AnimeSwap Labs is working on Holder Pool and has a basic plan to supports other Move contract chains.

AnimeSwap keep evolving and will be better and better.
