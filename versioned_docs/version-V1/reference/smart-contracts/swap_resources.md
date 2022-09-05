# resources
```move
// saved in resouce_account
struct LiquidityPool<phantom CoinType1, phantom CoinType2, phantom LPCoin> has key {
    coin_x_reserve: u64,
    coin_y_reserve: u64,
    last_block_timestamp: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
    k_last: u128,
    lp_mint_cap: MintCapability<LPCoin>,
    lp_freeze_cap: FreezeCapability<LPCoin>,
    lp_burn_cap: BurnCapability<LPCoin>,
}

// saved in resouce_account
struct AdminData has key, drop {
    signer_cap: SignerCapability,
    fee_to: address,
    fee_to_setter: address,
    dev_fee: u8,   // 1/(dev_fee+1) comes to fee_to if dev_fee_on
    swap_fee: u64,  // BP, swap_fee * 1/10000
    dev_fee_on: bool,   // default: true
}

struct PairMeta has drop, store, copy {
    coin_x: TypeInfo,
    coin_y: TypeInfo,
    lp_coin: TypeInfo,
}

// saved in resouce_account
struct PairInfo has key {
    pair_list: vector<PairMeta>,
    pair_created_event: event::EventHandle<PairMeta>,
}
```

## LiquidityPool
```move
// saved in resouce_account
struct LiquidityPool<phantom CoinType1, phantom CoinType2, phantom LPCoin> has key {
    coin_x_reserve: u64,
    coin_y_reserve: u64,
    last_block_timestamp: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
    k_last: u128,
    lp_mint_cap: MintCapability<LPCoin>,
    lp_freeze_cap: FreezeCapability<LPCoin>,
    lp_burn_cap: BurnCapability<LPCoin>,
}
```
* contains info for lp

## PairInfo
```move
// saved in resouce_account
struct PairInfo has key {
    pair_list: vector<PairMeta>,
    pair_created_event: event::EventHandle<PairMeta>,
}
```
* contains all pairs list