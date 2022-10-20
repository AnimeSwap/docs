"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=d(a),s=r,m=f["".concat(i,".").concat(s)]||f[s]||u[s]||c;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<c;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const c={},o="Overview",l={unversionedId:"contracts/contracts",id:"contracts/contracts",title:"Overview",description:"All contracts use two accounts, Deploy Account and Resource Account.",source:"@site/docs/contracts/contracts.md",sourceDirName:"contracts",slug:"/contracts/",permalink:"/docs/contracts/",draft:!1,editUrl:"https://github.com/AnimeSwap/docs/blob/main/docs/contracts/contracts.md",tags:[],version:"current",frontMatter:{},sidebar:"contracts",next:{title:"Entry Functions",permalink:"/docs/contracts/Swap/swap_api"}},i={},d=[{value:"Mainnet",id:"mainnet",level:2},{value:"Swap module",id:"swap-module",level:3},{value:"MasterChef module",id:"masterchef-module",level:3},{value:"Devnet",id:"devnet",level:2},{value:"Swap module",id:"swap-module-1",level:3},{value:"MasterChef module",id:"masterchef-module-1",level:3},{value:"Testnet",id:"testnet",level:2},{value:"Swap module",id:"swap-module-2",level:3},{value:"MasterChef module",id:"masterchef-module-2",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All contracts use two accounts, ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource Account"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Account")," is used for contract ABI, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource Account")," is used for keeping resources.")),(0,r.kt)("h2",{id:"mainnet"},"Mainnet"),(0,r.kt)("h3",{id:"swap-module"},"Swap module"),(0,r.kt)("p",null,"Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Github repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AnimeSwap/v1-core/tree/v1.0.0"},"v1-core")),(0,r.kt)("li",{parentName:"ul"},"Module name: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1")),(0,r.kt)("li",{parentName:"ul"},"Deploy Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=mainnet"},"0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c")),(0,r.kt)("li",{parentName:"ul"},"Resource Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf?network=mainnet"},"0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf"))),(0,r.kt)("h3",{id:"masterchef-module"},"MasterChef module"),(0,r.kt)("p",null,"We have not deployed yet."),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"As Aptos Devnet is still in development and reset weekly, the follow information may change in the future.")),(0,r.kt)("h2",{id:"devnet"},"Devnet"),(0,r.kt)("p",null,"Current docs works for the following ",(0,r.kt)("strong",{parentName:"p"},"Aptos Devnet 20221014"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Devnet branch commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"83641d3f083762f31700060e5e95fbb1cbc28bf0")),(0,r.kt)("li",{parentName:"ul"},"Docker image tag: ",(0,r.kt)("inlineCode",{parentName:"li"},"devnet_83641d3f083762f31700060e5e95fbb1cbc28bf0")),(0,r.kt)("li",{parentName:"ul"},"Docker image digest: ",(0,r.kt)("inlineCode",{parentName:"li"},"sha256:9dc89a374f1b8856953f397b4e4efa57d0452d64d5b05f191b7ea8a56433f01b")),(0,r.kt)("li",{parentName:"ul"},"genesis.blob sha256: ",(0,r.kt)("inlineCode",{parentName:"li"},"72bc82aa47f267d8fc0e1bd9b4c056d051d0cabd5434c9a6904ea36a129e8c85")),(0,r.kt)("li",{parentName:"ul"},"waypoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"0:a14d119d7ba841c99354d8cb3fb274a1879a0a1fc1308d41d1797b80f3dd675b")),(0,r.kt)("li",{parentName:"ul"},"Chain ID: ",(0,r.kt)("inlineCode",{parentName:"li"},"34"))),(0,r.kt)("h3",{id:"swap-module-1"},"Swap module"),(0,r.kt)("p",null,"Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Github repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AnimeSwap/v1-core/tree/v0.4.0"},"v1-core")),(0,r.kt)("li",{parentName:"ul"},"Module name: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1")),(0,r.kt)("li",{parentName:"ul"},"Deploy Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=Devnet"},"0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c")),(0,r.kt)("li",{parentName:"ul"},"Resource Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf?network=Devnet"},"0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf"))),(0,r.kt)("h3",{id:"masterchef-module-1"},"MasterChef module"),(0,r.kt)("p",null,"MasterChef module is about staking LP and coins to earn extra rewards."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Github repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AnimeSwap/v1-staking"},"v1-staking")),(0,r.kt)("li",{parentName:"ul"},"Module name: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1")),(0,r.kt)("li",{parentName:"ul"},"Deploy Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Devnet"},"0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78")),(0,r.kt)("li",{parentName:"ul"},"Resource Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a?network=Devnet"},"0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"testnet"},"Testnet"),(0,r.kt)("h3",{id:"swap-module-2"},"Swap module"),(0,r.kt)("p",null,"Swap module is the core of DEX and AMM, the module is about swap coins, create pool, add and remove liquidity."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Github repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AnimeSwap/v1-core"},"v1-core")),(0,r.kt)("li",{parentName:"ul"},"Module name: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1f1")),(0,r.kt)("li",{parentName:"ul"},"Deploy Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c?network=Testnet"},"0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c")),(0,r.kt)("li",{parentName:"ul"},"Resource Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf?network=Testnet"},"0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf"))),(0,r.kt)("h3",{id:"masterchef-module-2"},"MasterChef module"),(0,r.kt)("p",null,"MasterChef module is about staking LP and coins to earn extra rewards."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Github repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AnimeSwap/v1-staking"},"v1-staking")),(0,r.kt)("li",{parentName:"ul"},"Module name: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1")),(0,r.kt)("li",{parentName:"ul"},"Deploy Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78?network=Testnet"},"0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78")),(0,r.kt)("li",{parentName:"ul"},"Resource Account: ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.aptoslabs.com/account/0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a?network=Testnet"},"0xe4f52c8632301da5eba4529d7e30068f2ac19e0ccf480439bb3858a9b3ec0c8a"))))}u.isMDXComponent=!0}}]);