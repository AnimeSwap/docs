# Resources
```move
struct LiquidityPool<phantom CoinType1, phantom CoinType2, phantom LPCoin> has key {
    coin_x_reserve: Coin<CoinType1>,
    coin_y_reserve: Coin<CoinType2>,
    last_block_timestamp: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
    k_last: u128,
    lp_mint_cap: MintCapability<LPCoin>,
    lp_freeze_cap: FreezeCapability<LPCoin>,
    lp_burn_cap: BurnCapability<LPCoin>,
    locked: bool,
}

struct AdminData has key, drop {
    signer_cap: SignerCapability,
    dao_fee_to: address,
    admin_address: address,
    dao_fee: u8,   // 1/(dao_fee+1) comes to dao_fee_to if dao_fee_on
    swap_fee: u64,  // BP, swap_fee * 1/10000
    dao_fee_on: bool,   // default: true
    is_pause_flash: bool, // pause flash swap
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
struct LiquidityPool<phantom CoinType1, phantom CoinType2, phantom LPCoin> has key {
    coin_x_reserve: Coin<CoinType1>,
    coin_y_reserve: Coin<CoinType2>,
    last_block_timestamp: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
    k_last: u128,
    lp_mint_cap: MintCapability<LPCoin>,
    lp_freeze_cap: FreezeCapability<LPCoin>,
    lp_burn_cap: BurnCapability<LPCoin>,
    locked: bool,
}
```
* contains info for lp

## AdminData
```move
struct AdminData has key, drop {
    signer_cap: SignerCapability,
    dao_fee_to: address,
    admin_address: address,
    dao_fee: u8,   // 1/(dao_fee+1) comes to dao_fee_to if dao_fee_on
    swap_fee: u64,  // BP, swap_fee * 1/10000
    dao_fee_on: bool,   // default: true
    is_pause_flash: bool, // pause flash swap
}
```
* contains swap config

## PairInfo
```move
struct PairInfo has key {
    pair_list: vector<PairMeta>,
}
```
* contains all pairs list