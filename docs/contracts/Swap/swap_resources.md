# Resources
```move
// LP-realated resource
struct LiquidityPool<phantom X, phantom Y> has key {
    coin_x_reserve: Coin<X>,
    coin_y_reserve: Coin<Y>,
    last_block_timestamp: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
    k_last: u128,
    lp_mint_cap: MintCapability<LPCoin<X, Y>>,
    lp_freeze_cap: FreezeCapability<LPCoin<X, Y>>,
    lp_burn_cap: BurnCapability<LPCoin<X, Y>>,
    locked: bool,
}

// Global config resource
struct AdminData has key {
    signer_cap: SignerCapability,
    dao_fee_to: address,
    admin_address: address,
    dao_fee: u8,   // 1/(dao_fee+1) comes to dao_fee_to if dao_fee_on
    swap_fee: u64,  // BP, swap_fee * 1/10000
    dao_fee_on: bool,   // default: true
    is_pause: bool, // pause swap
}

struct PairMeta has drop, store, copy {
    coin_x: TypeInfo,
    coin_y: TypeInfo,
    lp_coin: TypeInfo,
}

struct PairInfo has key {
    pair_list: vector<PairMeta>,
}
```

## LiquidityPool
```move
struct LiquidityPool<phantom X, phantom Y> has key {
    coin_x_reserve: Coin<X>,
    coin_y_reserve: Coin<Y>,
    last_block_timestamp: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
    k_last: u128,
    lp_mint_cap: MintCapability<LPCoin<X, Y>>,
    lp_freeze_cap: FreezeCapability<LPCoin<X, Y>>,
    lp_burn_cap: BurnCapability<LPCoin<X, Y>>,
    locked: bool,
}
```
* Contains info for lp

## AdminData
```move
struct AdminData has key, drop {
    signer_cap: SignerCapability,
    dao_fee_to: address,
    admin_address: address,
    dao_fee: u8,   // 1/(dao_fee+1) comes to dao_fee_to if dao_fee_on
    swap_fee: u64,  // BP, swap_fee * 1/10000
    dao_fee_on: bool,   // default: true
    is_pause: bool, // pause swap
}
```
* Contains global swap config
* Currently `swap_fee = 30`, means `0.3%` swap fee
* Currently `dao_fee = 5`, means `1/6 (0.05%)` swap fee for dao, and `5/6 (0.25%)` for AMM

## PairInfo
```move
struct PairInfo has key {
    pair_list: vector<PairMeta>,
}
```
* Contains all pairs list