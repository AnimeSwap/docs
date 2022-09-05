# Events
```move
// save this resource to DEPLOYER
struct PairInfo has key {
    pair_list: vector<PairMeta>,
    pair_created_event: event::EventHandle<PairMeta>,
}

// save this resource to caller
struct Events has key {
    mint_event: event::EventHandle<MintEvent>,
    burn_event: event::EventHandle<BurnEvent>,
    swap_event: event::EventHandle<SwapEvent>,
    sync_event: event::EventHandle<SyncEvent>,
}

struct MintEvent has drop, store {
    pair_meta: PairMeta,
    amount_x: u64,
    amount_y: u64,
}

struct BurnEvent has drop, store {
    pair_meta: PairMeta,
    amount_x: u64,
    amount_y: u64,
}

struct SwapEvent has drop, store {
    pair_meta: PairMeta,
    amount_x_in: u64,
    amount_y_in: u64,
    amount_x_out: u64,
    amount_y_out: u64,
}

struct SyncEvent has drop, store {
    pair_meta: PairMeta,
    reserve_x: u64,
    reserve_y: u64,
}
```

## pair_created_event
```move
let pair_meta = get_pair_meta<CoinType1, CoinType2>();
event::emit_event(&mut pair_info.pair_created_event, pair_meta);
```

## mint_event
```move
event::emit_event(&mut events.mint_event, MintEvent {
    pair_meta: get_pair_meta<CoinType1, CoinType2>(),
    amount_x,
    amount_y,
});
```

## burn_event
```move
event::emit_event(&mut events.burn_event, BurnEvent {
    pair_meta: get_pair_meta<CoinType1, CoinType2>(),
    amount_x,
    amount_y,
});
```

## swap_event
```move
event::emit_event(&mut events.swap_event, SwapEvent {
    pair_meta: get_pair_meta<CoinType1, CoinType2>(),
    amount_x_in,
    amount_y_in,
    amount_x_out,
    amount_y_out,
});
```

## sync_event
```move
event::emit_event(&mut events.sync_event, SyncEvent {
    pair_meta: get_pair_meta<CoinType1, CoinType2>(),
    reserve_x,
    reserve_y,
});
```