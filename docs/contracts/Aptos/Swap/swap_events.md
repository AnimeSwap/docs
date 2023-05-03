# Events
```move
struct PairInfo has key {
    pair_list: vector<PairMeta>,
}

struct Events<phantom X, phantom Y> has key {
    pair_created_event: event::EventHandle<PairCreatedEvent<X, Y>>,
    mint_event: event::EventHandle<MintEvent<X, Y>>,
    burn_event: event::EventHandle<BurnEvent<X, Y>>,
    swap_event: event::EventHandle<SwapEvent<X, Y>>,
    sync_event: event::EventHandle<SyncEvent<X, Y>>,
    flash_swap_event: event::EventHandle<FlashSwapEvent<X, Y>>,
}

struct PairCreatedEvent<phantom X, phantom Y> has drop, store {
    meta: PairMeta,
}

struct MintEvent<phantom X, phantom Y> has drop, store {
    amount_x: u64,
    amount_y: u64,
    liquidity: u64,
}

struct BurnEvent<phantom X, phantom Y> has drop, store {
    amount_x: u64,
    amount_y: u64,
    liquidity: u64,
}

struct SwapEvent<phantom X, phantom Y> has drop, store {
    amount_x_in: u64,
    amount_y_in: u64,
    amount_x_out: u64,
    amount_y_out: u64,
}

struct SyncEvent<phantom X, phantom Y> has drop, store {
    reserve_x: u64,
    reserve_y: u64,
    last_price_x_cumulative: u128,
    last_price_y_cumulative: u128,
}

struct FlashSwapEvent<phantom X, phantom Y> has drop, store {
    loan_coin_x: u64,
    loan_coin_y: u64,
    repay_coin_x: u64,
    repay_coin_y: u64,
}
```

## pair_created_event
```move
let pair_meta = get_pair_meta<X, Y>();
event::emit_event(&mut events.pair_created_event, PairCreatedEvent {
    meta: pair_meta,
});
```

## mint_event
```move
event::emit_event(&mut events.mint_event, MintEvent {
    amount_x,
    amount_y,
    liquidity,
});
```

## burn_event
```move
event::emit_event(&mut events.burn_event, BurnEvent {
    amount_x,
    amount_y,
    liquidity,
});
```

## swap_event
```move
event::emit_event(&mut events.swap_event, SwapEvent {
    amount_x_in,
    amount_y_in,
    amount_x_out,
    amount_y_out,
});
```

## sync_event
```move
event::emit_event(&mut events.sync_event, SyncEvent {
    reserve_x,
    reserve_y,
    last_price_x_cumulative,
    last_price_y_cumulative,
});
```

## flash_swap_event
```move
event::emit_event(&mut events.flash_swap_event, FlashSwapEvent {
    loan_coin_x,
    loan_coin_y,
    repay_coin_x,
    repay_coin_y,
});
```