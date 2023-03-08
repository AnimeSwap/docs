"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"animeswap-v1","metadata":{"permalink":"/blog/animeswap-v1","source":"@site/blog/2022-11-23-introduction-animeswap-v1.md","title":"Introducing AnimeSwap v1","description":"AnimeSwap v1 is a protocol of decentralized exchange (DEX) and automated market maker (AMM) runs on Move Virtual Machine. Anyone could interact with the protocol for swaping coins and earn coins.","date":"2022-11-23T00:00:00.000Z","formattedDate":"November 23, 2022","tags":[{"label":"animeswap","permalink":"/blog/tags/animeswap"},{"label":"protocol","permalink":"/blog/tags/protocol"},{"label":"intruduction","permalink":"/blog/tags/intruduction"}],"readingTime":4.03,"hasTruncateMarker":false,"authors":[{"name":"Azard\xb7D\xb7Scarlet","title":"Anime Master","url":"https://github.com/Azard","imageURL":"https://github.com/Azard.png","key":"azard"}],"frontMatter":{"slug":"animeswap-v1","title":"Introducing AnimeSwap v1","authors":["azard"],"tags":["animeswap","protocol","intruduction"]},"nextItem":{"title":"Aptos Dex Gas and Feature Comparison","permalink":"/blog/dex-comparison"}},"content":"**AnimeSwap v1** is a protocol of decentralized exchange (DEX) and automated market maker (AMM) runs on Move Virtual Machine. Anyone could interact with the protocol for swaping coins and earn coins.\\n\\nAnimeSwap protocol has three basic usages:\\n\\n* **Swap**: create a completely free trading experience for everyone.\\n* **Earn**: earn with automated market maker in a easiest way, more profit, less loss.\\n* **Build**: as a public protocol that every DApp, every tools  and every one could connect, as a infrastructure to improve on-chain liquidity.\\n\\n## The Model\\n```\\nx * y = k\\n```\\n\\nAnimeSwap not including multiple model in one protocol, only using one model, and the model is the core of the protocol.\\n\\n`x * y = k` AMM model is widely used because of [Uniswap v2](https://docs.uniswap.org/contracts/v2/overview), its a very generic AMM model and amolst suitable for  all scenarios.\\n\\nEach trade pair including exactly two coins in order of address alphabet.\\nOn the other hand, each two coins has match one exactly trade pair if the pair has been created.\\n\\nSome special scenario such as two different USD stable coins, its price is more relatively and in most time 1:1.\\nOther models like [Curve](https://curve.fi/) and [Uniswap v3](https://docs.uniswap.org/contracts/v3/overview) can provide higher liquidity efficiency.\\n\\nBut for early Aptos network, relative pair is not very important and not widely used, so AnimeSwap v1 choose the only one model to keep simple and uniform.\\n\\nSwap model contract open source code and documents [check here](/docs/contracts).\\n\\n## Anyone Can Create Pool\\n\\nAnother very important feature of AnimeSwap v1 is that anyone can create a pool.\\n\\nLearning from Uniswap\'s success, one of the key feature is permisionless. Which means thousands of trade pairs can be created by anyone,\\nand if the pair has been added liquidity by anyone it could swap.\\n\\nAnimeSwap Labs only developing the protocol, not managing the protocol, keeping AnimeSwap protocol **decentralized**. \\n\\n## Swap Fee and DAO\\n\\nLiquidity providers need incentives, they provide tokens (lock value) and may bear [impermanent loss](https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm), swap fee to reward liquidity providers is AMM basic loop and feature.\\n\\nAnimeSwap v1 swap fee is `0.3%`, which is the same as Uniswap v2, More specific:\\n\\n* `0.25%` swap fee distributed to liquidity providers as reward via adding LP token value directly.\\n* `0.05%` swap fee distributed to AnimeSwap DAO and locked into pairs as LP token.\\n\\nAnimeSwap v1 Swap fee maybe change in the future if that can improve the protocol, all changes will be [voted by AnimeSwap DAO](/docs/tutorial/Tokenomics#vote-and-governance). \\n\\nAnimeSwap has no IDO, all intial `ANI` token airdrop. AnimeSwap DAO is used to better building the AnimeSwap protocol via rewarding builders.\\nIf DAO fee accumulated too much and not used, it will be keep lock as LP token to provide liquidity or **buyback** `ANI` and **burn**.\\n\\nFor more details about DAO usages [check here](/docs/tutorial/Tokenomics#dao-treasury).\\n\\n## Flash Swap\\n\\nAnimeSwap supports Flash Swap, [here is Flash Swap example](/docs/contracts/Swap/swap_examples#flash-swap-example).\\n\\nFlash Swap is a very important feature of AMM, it could be used for arbitrage, liquidation, and other scenarios.\\n\\nA person can use pool funds to arbitrage or repay loans in a single transaction without additional principal.\\n\\nSimply put, it can better improve the efficiency of liquidity utilization and provide liquidity providers with higher rewards.\\n\\nHere is a good article about flash swap: [All About DeFi Flash Loans](https://pontem.network/posts/all-about-defi-flash-loans).\\n\\n:::info\\n`Flash Loans` is another name of `Flash Swap`, they are the same thing.\\n:::\\n\\n## Route\\n\\nGive a simple scenario, there are three pools (pairs): `A<>B`, `B<>C`, `C<>D`, and the user wants to swap `A` to `D`.\\n\\nFor some contracts has no route supports, user need make three transactions or make one big transactions to wrap three step transactions, it cost high gas fee.\\n\\nAnimeSwap supports inline route ABI for such scenario to make simple route swap and cost less gas fee.\\n\\nWhat\'s more, AnimeSwap interface has a visualization of route swap.\\nFor more about route comparison and AnimeSwap advences, read [Aptos Dex Gas and Feature Comparison](/blog/dex-comparison).\\n\\n## GAS Friendly\\n\\nAnimeSwap Labs spents a lot of time to optimize the [Move contract](https://github.com/AnimeSwap/v1-core) and make AnimeSwap v1 protocol the most GAS friendly protocol.\\n\\nAnimeSwap v1 protocol [core contract](https://github.com/AnimeSwap/v1-core) has become the best example for learning the Move contract\\n\\nFor more about GAS comparison and AnimeSwap advences, read [Aptos Dex Gas and Feature Comparison](/blog/dex-comparison#gas-units-cost-comparison).\\n\\n## Future Upgrade\\n\\nDeFi is fast evolving, and AnimeSwap will keep evolving.\\nIf there are better direction for ecosystem growth, AnimeSwap Labs will create and deploy AnimeSwap v2 protocol as upgrade, all decisions making via [vote-and-governance](/docs/tutorial/Tokenomics#vote-and-governance).\\n\\nAnyway, AnimeSwap v1 has been deploy on Aptos mainnet and it will live **as long as** Aptos network.\\n\\nFrom the time this article was written, AnimeSwap Labs is working on Holder Pool and has a basic plan to supports other Move contract chains.\\n\\nAnimeSwap keep evolving and will be better and better.\\n\\n> Update 20230309: AnimeSwap already deployed on Sui Devnet."},{"id":"dex-comparison","metadata":{"permalink":"/blog/dex-comparison","source":"@site/blog/2022-11-11-dex-gas-feature-comparison.md","title":"Aptos Dex Gas and Feature Comparison","description":"TL;DR: AnimeSwap saves your gas and supports most features.","date":"2022-11-11T00:00:00.000Z","formattedDate":"November 11, 2022","tags":[{"label":"animeswap","permalink":"/blog/tags/animeswap"},{"label":"dex","permalink":"/blog/tags/dex"},{"label":"gas","permalink":"/blog/tags/gas"}],"readingTime":3.01,"hasTruncateMarker":false,"authors":[{"name":"zzzkky","title":"Anime Master","url":"https://github.com/xiaozzz","imageURL":"https://github.com/xiaozzz.png","key":"zzzkky"}],"frontMatter":{"slug":"dex-comparison","title":"Aptos Dex Gas and Feature Comparison","authors":["zzzkky"],"tags":["animeswap","dex","gas"]},"prevItem":{"title":"Introducing AnimeSwap v1","permalink":"/blog/animeswap-v1"}},"content":"**TL;DR: AnimeSwap saves your gas and supports most features.**\\n\\n## Gas Units Cost Comparison\\nLower is better. `1k` costs `0.001 APT` gas fee at the lowest gas unit price.\\n\\n| Operation | AnimeSwap | Liquidswap[1] | Aux | PancakeSwap | Liquidswap Stable[2] |\\n| --------- | --------- | ---------- | ------- | ----------- | ----------- |\\n| Swap | [1.4k](https://explorer.aptoslabs.com/txn/29070665) | [4.3k](https://explorer.aptoslabs.com/txn/29054779) | [1.4k](https://explorer.aptoslabs.com/txn/29062775) | [9k](https://explorer.aptoslabs.com/txn/29071346) | [110k](https://explorer.aptoslabs.com/txn/29095574)\\n| Add LP[3] | [2.7k](https://explorer.aptoslabs.com/txn/28913205) or [3.2k](https://explorer.aptoslabs.com/txn/28867473) | [3.4k](https://explorer.aptoslabs.com/txn/29054857) | [2.4k](https://explorer.aptoslabs.com/txn/28627168) or [3.2k](https://explorer.aptoslabs.com/txn/28833128) | [3.5k](https://explorer.aptoslabs.com/txn/28987912) | - |\\n| Remove LP | [2.6k](https://explorer.aptoslabs.com/txn/29039235) | [1.7k](https://explorer.aptoslabs.com/txn/29054927) | [1.4k](https://explorer.aptoslabs.com/txn/28574524) | [2.4k](https://explorer.aptoslabs.com/txn/28741526) | - |\\n\\n:::info\\n* [1] Uncorrelated curve. Common case.\\n* [2] Stable curve.\\n* [3] Some Dex has different gas cost for adding LP under different situations.\\n:::\\n\\n### Analysis\\n* `Swap` is the most common use-case, over 95% of all transactions. `AnimeSwap` and `Aux` are the most gas-saving dexes in this situation. `3.1x` better than `Liquidswap`. `6.4x` better than `PancakeSwap`.\\n* `Liquidswap Stable` is **Heavily** gas-consuming, each tx takes at least `0.1 APT` gas fee in the lowest gas unit price.\\n* `Add/Remove LP` cost almost the same gas among these dexes.\\n\\n### Gas Conclusion\\n`AnimeSwap` and `Aux` are the most gas-saving dexes.\\n\\n## Features Comparison\\n| Feature | AnimeSwap | Liquidswap | Aux | PancakeSwap | Aptoswap\\n| ------- | --------- | ---------- | ------- | ----------- | -------- |\\n| Open source | \u2714\ufe0f [link](https://github.com/AnimeSwap/v1-core) | \u2714\ufe0f [link](https://github.com/pontem-network/liquidswap) | \u2714\ufe0f [link](https://github.com/aux-exchange/aux-exchange) | \u2714\ufe0f [link](https://github.com/pancakeswap/pancake-contracts-move) | \u2714\ufe0f [link](https://github.com/vividnetwork/aptoswap) |\\n| SwapExactCoinToCoin | \u2714\ufe0f | \u2714\ufe0f | \u2714\ufe0f | \u2714\ufe0f | \u2714\ufe0f |\\n| SwapCoinToExactCoin | \u2714\ufe0f | \u2714\ufe0f | \u2714\ufe0f | \u2714\ufe0f | \u274c |\\n| Gas-saving | \u2714\ufe0f | \u274c | \u2714\ufe0f | \u274c | \u2714\ufe0f |\\n| Custom Pairs | \u2714\ufe0f | \u2714\ufe0f | \u274c | \u2714\ufe0f | \u274c |\\n| Flash Swap | \u2714\ufe0f | \u2714\ufe0f | \u2714\ufe0f | \u274c| \u274c |\\n| Stable Curve | \u274c | \u2714\ufe0f[4] | \u274c | \u274c | \u274c |\\n| Oracle | \u2714\ufe0f | \u2714\ufe0f | \u274c | \u274c | \u274c |\\n| Route | \u2714\ufe0f | \u274c | \u274c | \u274c | \u274c |\\n\\n:::info\\n* [4] Support, but gas-consuming. Already explained in the above section.\\n:::\\n\\n### Analysis\\n* `Open source`: All the dexes are open-sourced. You can check the source code with link above.\\n* `SwapExactCoinToCoin`: This is the basic feature.\\n* `SwapCoinToExactCoin`: **SwapCoinToExactCoin** means whether uses can get exact output amount. For example, loan liquidators want to get exact amount coin with minimal input coin. Most dexes support this feature, while `Aptoswap` not.\\n![SwapCoinToExactCoin](/img/SwapCoinToExactCoin.png)\\n* `Gas-saving`: We have already explained in the above section. `AnimeSwap`, `Aux` and `Aptoswap` are the most gas-saving dexes.\\n* `Custom Pairs`: **Custom pairs** means whether users can create new coin pairs. `AnimeSwap`, `Liquidswap` and `PancakeSwap` have this feature. You can [add custom pair here](https://app.animeswap.org/#/add?chain=aptos)\\n![create pair](/img/createPair.png)\\n* `Flash Swap`: **Flash swap** allows you to borrow any available amount of assets without putting up any collateral, as long as the liquidity is returned to the protocol within one block transaction. This is the example for [AnimeSwap Flash Swap](/docs/contracts/Swap/swap_examples#flash-swap-example)\\n* `Stable Curve`: Unfortunately, we do not support this feature. Only `Liquidswap` support it, but has gas problem. \\n* `Oracle`: **Orcale** means support price oracle for other dapp. `AnimeSwap` and `Liquidswap` support this feature. This is the resources reference for [AnimeSwap Oracle](/docs/contracts/Swap/swap_resources#liquiditypool)\\n* `Route`: With **route**, you can swap any coin to any coin in one tx, among multiple pairs. Only `AnimeSwap` support a build-in router.\\n![router](/img/router.png)\\n\\n### Feature Conclusion\\n`AnimeSwap` and `Liquidswap` support most features.\\n\\n## Conclusion\\nAnimeSwap saves your gas and supports most features."}]}')}}]);