"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8927],{3905:(n,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>_});var o=a(7294);function t(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,o)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){t(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,o,t=function(n,e){if(null==n)return{};var a,o,t={},i=Object.keys(n);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var s=o.createContext({}),c=function(n){var e=o.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):r(r({},e),n)),a},p=function(n){var e=c(n.components);return o.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var a=n.components,t=n.mdxType,i=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=c(a),_=t,f=m["".concat(s,".").concat(_)]||m[_]||u[_]||i;return a?o.createElement(f,r(r({ref:e},p),{},{components:a})):o.createElement(f,r({ref:e},p))}));function _(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:t,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1148:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(7462),t=(a(7294),a(3905));const i={},r="Examples for contracts",l={unversionedId:"contracts/Sui/Swap/swap_examples",id:"contracts/Sui/Swap/swap_examples",title:"Examples for contracts",description:"Update your Move.toml with",source:"@site/docs/contracts/Sui/Swap/swap_examples.md",sourceDirName:"contracts/Sui/Swap",slug:"/contracts/Sui/Swap/swap_examples",permalink:"/docs/contracts/Sui/Swap/swap_examples",draft:!1,editUrl:"https://github.com/AnimeSwap/docs/blob/main/docs/contracts/Sui/Swap/swap_examples.md",tags:[],version:"current",frontMatter:{},sidebar:"contracts",previous:{title:"Events",permalink:"/docs/contracts/Sui/Swap/swap_events"}},s={},c=[{value:"Key public functions",id:"key-public-functions",level:2},{value:"Swap example",id:"swap-example",level:2},{value:"Flash swap example:",id:"flash-swap-example",level:2}],p={toc:c};function u(n){let{components:e,...a}=n;return(0,t.kt)("wrapper",(0,o.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"examples-for-contracts"},"Examples for contracts"),(0,t.kt)("p",null,"Update your ",(0,t.kt)("inlineCode",{parentName:"p"},"Move.toml")," with"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-toml"},"[dependencies.AnimeSwap]\ngit = 'https://github.com/AnimeSwap/sui-v1-core.git'\nrev = 'v1.0.0'\n")),(0,t.kt)("h2",{id:"key-public-functions"},"Key public functions"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-move"},"/// swap from Coin to Coin, both sides\n/// require X < Y\npublic fun swap_coins_for_coins<X, Y>(\n    lps: &mut LiquidityPools,\n    clock: &Clock,\n    coins_x_in: Coin<X>,\n    coins_y_in: Coin<Y>,\n    ctx: &mut TxContext,\n): (Coin<X>, Coin<Y>);\n\n/// create pair function\n/// require X < Y\npublic fun create_pair<X, Y>(\n    lps: &mut LiquidityPools,\n    ctx: &mut TxContext,\n);\n\n/// add liqudity\n/// require X < Y\npublic fun add_liquidity<X, Y>(\n    lps: &mut LiquidityPools,\n    clock: &Clock,\n    coin_x_origin: Coin<X>,\n    coin_y_origin: Coin<Y>,\n    amount_x_desired: u64,\n    amount_y_desired: u64,\n    amount_x_min: u64,\n    amount_y_min: u64,\n    ctx: &mut TxContext,\n): Coin<LPCoin<X, Y>>;\n\n/// remove liqudity\n/// require X < Y\npublic fun remove_liquidity<X, Y>(\n    lps: &mut LiquidityPools,\n    clock: &Clock,\n    liquidity: Coin<LPCoin<X, Y>>,\n    liquidity_desired: u64,\n    amount_x_min: u64,\n    amount_y_min: u64,\n    ctx: &mut TxContext,\n): (Coin<X>, Coin<Y>);\n\n/// Get flash swap coins. User can loan any coins, and repay in the same tx.\n/// In most cases, user may loan one coin, and repay the same or the other coin.\n/// require X < Y.\n/// * `loan_coin_x` - expected amount of X coins to loan.\n/// * `loan_coin_y` - expected amount of Y coins to loan.\n/// Returns both loaned X and Y coins: `(Coin<X>, Coin<Y>, Flashloan<X, Y)`.\npublic fun flash_swap<X, Y>(\n    lps: &mut LiquidityPools,\n    loan_coin_x: u64,\n    loan_coin_y: u64,\n): (Balance<X>, Balance<Y>, FlashSwap<X, Y>);\n\n/// Repay flash swap coins.\n/// User should repay amount, following the conditions:\n/// `new_pool_1_value * new_pool_2_value >= old_pool_1_value * old_pool_2_value`\n/// where `new_pool_x_value` is the `old_pool_x_value - amount_out + amount_in * (1 - swapFee)`,\n/// and `pool_x_value` is the reserve amount for a given CoinType.\n/// * `x_in` - X coins to pay.\n/// * `y_in` - Y coins to pay.\n/// * `flash_swap` - flash_swap return.\npublic fun pay_flash_swap<X, Y>(\n    lps: &mut LiquidityPools,\n    clock: &Clock,\n    x_in: Balance<X>,\n    y_in: Balance<Y>,\n    flash_swap: FlashSwap<X, Y>,\n);\n")),(0,t.kt)("h2",{id:"swap-example"},"Swap example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-move"},"use animeswap::animeswap_library;\nuse animeswap::animeswap::{Self, LiquidityPools};\n...\nfun swap_pair<X, Y> (\n    lps: &mut LiquidityPools,\n    clock: &Clock,\n    x_in: Coin<X>,\n    ctx: &mut TxContext,\n): Coin<Y> {\n    // if you can ensure `animeswap_library::compare<X, Y>()` is always true from caller, you can simplify this\n    if (animeswap_library::compare<X, Y>()) {\n        let (zero, coins_out) = animeswap::swap_coins_for_coins<X, Y>(\n            lps,\n            clock,\n            x_in,\n            coin::zero(ctx),\n            ctx,\n        );\n        coin::destroy_zero(zero);\n        coins_out\n    } else {\n        let (coins_out, zero) = animeswap::swap_coins_for_coins<Y, X>(\n            lps,\n            clock,\n            coin::zero(ctx),\n            x_in,\n            ctx,\n        );\n        coin::destroy_zero(zero);\n        coins_out\n    }\n}\n")),(0,t.kt)("h2",{id:"flash-swap-example"},"Flash swap example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-move"},"use animeswap::animeswap_library;\nuse animeswap::animeswap::{Self, LiquidityPools};\n...\nfun swap_pair_with_flash_swap<X, Y>(\n    lps: &mut LiquidityPools,\n    clock: &Clock,\n    x_in: Coin<X>,\n    amount: u64,\n    ctx: &mut TxContext,\n) {\n    if (animeswap_library::compare<X, Y>()) {\n        // flash loan Y\n        let (balance_in_zero, balance_in, flash_swap) = animeswap::flash_swap<X, Y>(lps, 0, borrow_amount);\n        balance::destroy_zero<X>(balance_in_zero);\n        let coin_in = coin::from_balance<Y>(balance_in, ctx);\n        // do something\n        coins_out = f(coins_in);\n        // repay X\n        let repay_coins = coin::split(&mut coins_out, amount, ctx);\n        animeswap::pay_flash_swap<X, Y>(lps, clock, coin::into_balance<X>(repay_coins), balance::zero<Y>(), flash_swap);\n    } else {\n        // flash loan Y\n        let (balance_in, balance_in_zero, flash_swap) = animeswap::flash_swap<Y, X>(lps, 0, borrow_amount);\n        balance::destroy_zero<X>(balance_in_zero);\n        let coin_in = coin::from_balance<Y>(balance_in, ctx);\n        // do something\n        coins_out = f(coins_in);\n        // repay X\n        let repay_coins = coin::split(&mut coins_out, amount, ctx);\n        animeswap::pay_flash_swap<Y, X>(lps, clock, balance::zero<Y>(), coin::into_balance<X>(repay_coins), flash_swap);\n    };\n}\n")))}u.isMDXComponent=!0}}]);