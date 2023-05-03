---
slug: dex-comparison
title: Aptos Dex Gas and Feature Comparison
authors: [zzzkky]
tags: [animeswap,dex,gas]
---

# Aptos Dex Gas and Feature Comparison
**TL;DR: AnimeSwap saves your gas and supports most features.**

## Gas Units Cost Comparison
Lower is better. `1k` costs `0.001 APT` gas fee at the lowest gas unit price.

| Operation | AnimeSwap | Liquidswap[1] | Aux | PancakeSwap | Liquidswap Stable[2] |
| --------- | --------- | ---------- | ------- | ----------- | ----------- |
| Swap | [1.4k](https://explorer.aptoslabs.com/txn/29070665) | [4.3k](https://explorer.aptoslabs.com/txn/29054779) | [1.4k](https://explorer.aptoslabs.com/txn/29062775) | [9k](https://explorer.aptoslabs.com/txn/29071346) | [110k](https://explorer.aptoslabs.com/txn/29095574)
| Add LP[3] | [2.7k](https://explorer.aptoslabs.com/txn/28913205) or [3.2k](https://explorer.aptoslabs.com/txn/28867473) | [3.4k](https://explorer.aptoslabs.com/txn/29054857) | [2.4k](https://explorer.aptoslabs.com/txn/28627168) or [3.2k](https://explorer.aptoslabs.com/txn/28833128) | [3.5k](https://explorer.aptoslabs.com/txn/28987912) | - |
| Remove LP | [2.6k](https://explorer.aptoslabs.com/txn/29039235) | [1.7k](https://explorer.aptoslabs.com/txn/29054927) | [1.4k](https://explorer.aptoslabs.com/txn/28574524) | [2.4k](https://explorer.aptoslabs.com/txn/28741526) | - |

:::info
* [1] Uncorrelated curve. Common case.
* [2] Stable curve.
* [3] Some Dex has different gas cost for adding LP under different situations.
:::

### Analysis
* `Swap` is the most common use-case, over 95% of all transactions. `AnimeSwap` and `Aux` are the most gas-saving dexes in this situation. `3.1x` better than `Liquidswap`. `6.4x` better than `PancakeSwap`.
* `Liquidswap Stable` is **Heavily** gas-consuming, each tx takes at least `0.1 APT` gas fee in the lowest gas unit price.
* `Add/Remove LP` cost almost the same gas among these dexes.

### Gas Conclusion
`AnimeSwap` and `Aux` are the most gas-saving dexes.

## Features Comparison
| Feature | AnimeSwap | Liquidswap | Aux | PancakeSwap | Aptoswap
| ------- | --------- | ---------- | ------- | ----------- | -------- |
| Open source | ✔️ [link](https://github.com/AnimeSwap/v1-core) | ✔️ [link](https://github.com/pontem-network/liquidswap) | ✔️ [link](https://github.com/aux-exchange/aux-exchange) | ✔️ [link](https://github.com/pancakeswap/pancake-contracts-move) | ✔️ [link](https://github.com/vividnetwork/aptoswap) |
| SwapExactCoinToCoin | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwapCoinToExactCoin | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| Gas-saving | ✔️ | ❌ | ✔️ | ❌ | ✔️ |
| Custom Pairs | ✔️ | ✔️ | ❌ | ✔️ | ❌ |
| Flash Swap | ✔️ | ✔️ | ✔️ | ❌| ❌ |
| Stable Curve | ❌ | ✔️[4] | ❌ | ❌ | ❌ |
| Oracle | ✔️ | ✔️ | ❌ | ❌ | ❌ |
| Route | ✔️ | ❌ | ❌ | ❌ | ❌ |

:::info
* [4] Support, but gas-consuming. Already explained in the above section.
:::

### Analysis
* `Open source`: All the dexes are open-sourced. You can check the source code with link above.
* `SwapExactCoinToCoin`: This is the basic feature.
* `SwapCoinToExactCoin`: **SwapCoinToExactCoin** means whether uses can get exact output amount. For example, loan liquidators want to get exact amount coin with minimal input coin. Most dexes support this feature, while `Aptoswap` not.
![SwapCoinToExactCoin](/img/SwapCoinToExactCoin.png)
* `Gas-saving`: We have already explained in the above section. `AnimeSwap`, `Aux` and `Aptoswap` are the most gas-saving dexes.
* `Custom Pairs`: **Custom pairs** means whether users can create new coin pairs. `AnimeSwap`, `Liquidswap` and `PancakeSwap` have this feature. You can [add custom pair here](https://app.animeswap.org/#/add?chain=aptos)
![create pair](/img/createPair.png)
* `Flash Swap`: **Flash swap** allows you to borrow any available amount of assets without putting up any collateral, as long as the liquidity is returned to the protocol within one block transaction. This is the example for [AnimeSwap Flash Swap](/docs/contracts/Aptos/Swap/swap_examples#flash-swap-example)
* `Stable Curve`: Unfortunately, we do not support this feature. Only `Liquidswap` support it, but has gas problem. 
* `Oracle`: **Orcale** means support price oracle for other dapp. `AnimeSwap` and `Liquidswap` support this feature. This is the resources reference for [AnimeSwap Oracle](/docs/contracts/Aptos/Swap/swap_resources#liquiditypool)
* `Route`: With **route**, you can swap any coin to any coin in one tx, among multiple pairs. Only `AnimeSwap` support a build-in router.
![router](/img/router.png)

### Feature Conclusion
`AnimeSwap` and `Liquidswap` support most features.

## Conclusion
AnimeSwap saves your gas and supports most features.