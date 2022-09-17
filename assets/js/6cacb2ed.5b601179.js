"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Resources",c={unversionedId:"contracts/Swap/swap_resources",id:"contracts/Swap/swap_resources",title:"Resources",description:"LiquidityPool",source:"@site/docs/contracts/Swap/swap_resources.md",sourceDirName:"contracts/Swap",slug:"/contracts/Swap/swap_resources",permalink:"/docs/contracts/Swap/swap_resources",draft:!1,editUrl:"https://github.com/AnimeSwap/docs/blob/main/docs/contracts/Swap/swap_resources.md",tags:[],version:"current",frontMatter:{},sidebar:"contracts",previous:{title:"Entry Functions",permalink:"/docs/contracts/Swap/swap_api"},next:{title:"Events",permalink:"/docs/contracts/Swap/swap_events"}},p={},s=[{value:"LiquidityPool",id:"liquiditypool",level:2},{value:"PairInfo",id:"pairinfo",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resources"},"Resources"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-move"},"struct LiquidityPool<phantom CoinType1, phantom CoinType2, phantom LPCoin> has key {\n    coin_x_reserve: u64,\n    coin_y_reserve: u64,\n    last_block_timestamp: u64,\n    last_price_x_cumulative: u128,\n    last_price_y_cumulative: u128,\n    k_last: u128,\n    lp_mint_cap: MintCapability<LPCoin>,\n    lp_freeze_cap: FreezeCapability<LPCoin>,\n    lp_burn_cap: BurnCapability<LPCoin>,\n}\n\nstruct AdminData has key, drop {\n    signer_cap: SignerCapability,\n    fee_to: address,\n    fee_to_setter: address,\n    dev_fee: u8,   // 1/(dev_fee+1) comes to fee_to if dev_fee_on\n    swap_fee: u64,  // BP, swap_fee * 1/10000\n    dev_fee_on: bool,   // default: true\n}\n\nstruct PairMeta has drop, store, copy {\n    coin_x: TypeInfo,\n    coin_y: TypeInfo,\n    lp_coin: TypeInfo,\n}\n\nstruct PairInfo has key {\n    pair_list: vector<PairMeta>,\n    pair_created_event: event::EventHandle<PairMeta>,\n}\n")),(0,a.kt)("h2",{id:"liquiditypool"},"LiquidityPool"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-move"},"struct LiquidityPool<phantom CoinType1, phantom CoinType2, phantom LPCoin> has key {\n    coin_x_reserve: u64,\n    coin_y_reserve: u64,\n    last_block_timestamp: u64,\n    last_price_x_cumulative: u128,\n    last_price_y_cumulative: u128,\n    k_last: u128,\n    lp_mint_cap: MintCapability<LPCoin>,\n    lp_freeze_cap: FreezeCapability<LPCoin>,\n    lp_burn_cap: BurnCapability<LPCoin>,\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contains info for lp")),(0,a.kt)("h2",{id:"pairinfo"},"PairInfo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-move"},"struct PairInfo has key {\n    pair_list: vector<PairMeta>,\n    pair_created_event: event::EventHandle<PairMeta>,\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contains all pairs list")))}u.isMDXComponent=!0}}]);