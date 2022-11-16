"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Entry Functions",c={unversionedId:"contracts/MasterChef/masterchef_api",id:"contracts/MasterChef/masterchef_api",title:"Entry Functions",description:"deposit",source:"@site/docs/contracts/MasterChef/masterchef_api.md",sourceDirName:"contracts/MasterChef",slug:"/contracts/MasterChef/masterchef_api",permalink:"/docs/contracts/MasterChef/masterchef_api",draft:!1,editUrl:"https://github.com/AnimeSwap/docs/blob/main/docs/contracts/MasterChef/masterchef_api.md",tags:[],version:"current",frontMatter:{},sidebar:"contracts",previous:{title:"Examples for contracts",permalink:"/docs/contracts/Swap/swap_examples"},next:{title:"Resources",permalink:"/docs/contracts/MasterChef/masterchef_resources"}},l={},p=[{value:"deposit",id:"deposit",level:2},{value:"withdraw",id:"withdraw",level:2},{value:"emergency_withdraw",id:"emergency_withdraw",level:2},{value:"enter_staking &amp; leave_staking",id:"enter_staking--leave_staking",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entry-functions"},"Entry Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-move"},"public entry fun deposit<CoinType>(account: &signer, amount: u64)\npublic entry fun withdraw<CoinType>(account: &signer, amount: u64)\npublic entry fun enter_staking(account: &signer, amount: u64)\npublic entry fun leave_staking(account: &signer, amount: u64)\npublic entry fun emergency_withdraw<CoinType>(account: &signer)\n")),(0,r.kt)("h2",{id:"deposit"},"deposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-move"},"public entry fun deposit<CoinType>(account: &signer, amount: u64)\n")),(0,r.kt)("p",null,"Deposit ",(0,r.kt)("inlineCode",{parentName:"p"},"CoinType")," to masterchef, and get pending ",(0,r.kt)("inlineCode",{parentName:"p"},"ANI")," reward"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CoinType")," should already been added to masterchef by admin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount")," can be ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," for getting ",(0,r.kt)("inlineCode",{parentName:"li"},"ANI")," reward only"),(0,r.kt)("li",{parentName:"ul"},"Emit ",(0,r.kt)("inlineCode",{parentName:"li"},"deposit_event")),(0,r.kt)("li",{parentName:"ul"},"CLI example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::deposit \\\n--args u64:1000 \\\n--type-args 0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf::LPCoinV1::LPCoin\\<0x1::aptos_coin::AptosCoin,0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeCoin::ANI\\>\n")),(0,r.kt)("h2",{id:"withdraw"},"withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-move"},"public entry fun withdraw<CoinType>(account: &signer, amount: u64)\n")),(0,r.kt)("p",null,"Withdraw ",(0,r.kt)("inlineCode",{parentName:"p"},"CoinType")," from masterchef, and get pending ",(0,r.kt)("inlineCode",{parentName:"p"},"ANI")," reward"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount")," should be less or equal than the amount deposit before"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount")," can be ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," for getting ",(0,r.kt)("inlineCode",{parentName:"li"},"ANI")," reward only"),(0,r.kt)("li",{parentName:"ul"},"Emit ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraw_event")),(0,r.kt)("li",{parentName:"ul"},"CLI example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::withdraw \\\n--args u64:1000 \\\n--type-args 0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf::LPCoinV1::LPCoin\\<0x1::aptos_coin::AptosCoin,0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeCoin::ANI\\>\n")),(0,r.kt)("h2",{id:"emergency_withdraw"},"emergency_withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-move"},"public entry fun emergency_withdraw<CoinType>(account: &signer)\n")),(0,r.kt)("p",null,"Withdraw without caring about rewards. ",(0,r.kt)("strong",{parentName:"p"},"EMERGENCY ONLY"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pending ",(0,r.kt)("inlineCode",{parentName:"li"},"ANI")," reward will be lost"),(0,r.kt)("li",{parentName:"ul"},"Emit ",(0,r.kt)("inlineCode",{parentName:"li"},"emergency_withdraw_event"))),(0,r.kt)("h2",{id:"enter_staking--leave_staking"},"enter_staking & leave_staking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-move"},"public entry fun enter_staking(account: &signer, amount: u64)\npublic entry fun leave_staking(account: &signer, amount: u64)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enter_staking")," is alias as ",(0,r.kt)("inlineCode",{parentName:"li"},"deposit<ANI>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leave_staking")," is alias as ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraw<ANI>")),(0,r.kt)("li",{parentName:"ul"},"CLI example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::enter_staking \\\n--args u64:100000000\naptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::leave_staking \\\n--args u64:100000000\n")))}u.isMDXComponent=!0}}]);