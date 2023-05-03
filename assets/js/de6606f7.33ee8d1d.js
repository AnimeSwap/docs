"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[104],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,f=u["".concat(l,".").concat(b)]||u[b]||s[b]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={},c="Overview",i={unversionedId:"contracts/Sui/contracts",id:"contracts/Sui/contracts",title:"Overview",description:"Similar to Aptos, Sui uses Shared Object for keeping resources.",source:"@site/docs/contracts/Sui/contracts.md",sourceDirName:"contracts/Sui",slug:"/contracts/Sui/contracts",permalink:"/docs/contracts/Sui/contracts",draft:!1,editUrl:"https://github.com/AnimeSwap/docs/blob/main/docs/contracts/Sui/contracts.md",tags:[],version:"current",frontMatter:{},sidebar:"contracts",previous:{title:"Events",permalink:"/docs/contracts/Aptos/MasterChef/masterchef_event"},next:{title:"Entry Functions",permalink:"/docs/contracts/Sui/Swap/swap_api"}},l={},d=[{value:"Mainnet",id:"mainnet",level:2},{value:"Swap module",id:"swap-module",level:3},{value:"Testnet",id:"testnet",level:2},{value:"Swap module",id:"swap-module-1",level:3}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Similar to Aptos, Sui uses ",(0,n.kt)("inlineCode",{parentName:"p"},"Shared Object")," for keeping resources.")),(0,n.kt)("h2",{id:"mainnet"},"Mainnet"),(0,n.kt)("h3",{id:"swap-module"},"Swap module"),(0,n.kt)("p",null,"Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitHub repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AnimeSwap/sui-v1-core/tree/v1.0.0"},"sui-v1-core")),(0,n.kt)("li",{parentName:"ul"},"Module name: ",(0,n.kt)("inlineCode",{parentName:"li"},"0x88d362329ede856f5f67867929ed570bba06c975abec2fab7f0601c56f6a8cb1::animeswap")),(0,n.kt)("li",{parentName:"ul"},"Deploy Account: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.sui.io/address/0x2ab6bc284091a0dd94f9533f756549fe7583e51c79d0b10bacd5d9816ccf8f74?network=mainnet"},"0x2ab6bc284091a0dd94f9533f756549fe7583e51c79d0b10bacd5d9816ccf8f74")),(0,n.kt)("li",{parentName:"ul"},"Shared Object: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.sui.io/object/0xdd7e3a071c6a090a157eccc3c9bbc4d2b3fb5ac9a4687b1c300bf74be6a58945?network=testnet"},"0xdd7e3a071c6a090a157eccc3c9bbc4d2b3fb5ac9a4687b1c300bf74be6a58945"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"testnet"},"Testnet"),(0,n.kt)("h3",{id:"swap-module-1"},"Swap module"),(0,n.kt)("p",null,"Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitHub repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AnimeSwap/sui-v1-core"},"sui-v1-core")),(0,n.kt)("li",{parentName:"ul"},"Module name: ",(0,n.kt)("inlineCode",{parentName:"li"},"0xde715da6fad069acbc67dd7f0921e410e0fbd8c422c4500404feba3c5667e712::animeswap")),(0,n.kt)("li",{parentName:"ul"},"Deploy Account: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.sui.io/address/0xd7086a6284d01b710286a384d81761657b41ebef78e652e720d38c311bfd1678?network=testnet"},"0xd7086a6284d01b710286a384d81761657b41ebef78e652e720d38c311bfd1678")),(0,n.kt)("li",{parentName:"ul"},"Shared Object: ",(0,n.kt)("a",{parentName:"li",href:"https://explorer.sui.io/object/0x458d342380ed630b2df420897b78564d557365604685083c456b6b6c2ba2ce0b?network=testnet"},"0x458d342380ed630b2df420897b78564d557365604685083c456b6b6c2ba2ce0b"))))}s.isMDXComponent=!0}}]);