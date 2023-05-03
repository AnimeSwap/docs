# Events
```move
struct PairCreatedEvent<phantom X, phantom Y> has drop, copy {
    meta: PairMeta,
}

struct MintEvent<phantom X, phantom Y> has drop, copy {
    amount_x: u64,
    amount_y: u64,
    liquidity: u64,
}

struct BurnEvent<phantom X, phantom Y> has drop, copy {
    amount_x: u64,
    amount_y: u64,
    liquidity: u64,
}

struct SwapEvent<phantom X, phantom Y> has drop, copy {
    amount_x_in: u64,
    amount_y_in: u64,
    amount_x_out: u64,
    amount_y_out: u64,
}

struct SyncEvent<phantom X, phantom Y> has drop, copy {
    reserve_x: u64,
    reserve_y: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
}

struct FlashSwapEvent<phantom X, phantom Y> has drop, copy {
    loan_coin_x: u64,
    loan_coin_y: u64,
    repay_coin_x: u64,
    repay_coin_y: u64,
}
```