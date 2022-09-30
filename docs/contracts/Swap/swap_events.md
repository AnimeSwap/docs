# Events
```move
// save this resource to resource_account
struct PairInfo has key {
    pair_list: vector<PairMeta>,
}

// save this resource to resource_account
struct Events<phantom CoinType1, phantom CoinType2> has key {
    pair_created_event: event::EventHandle<PairCreatedEvent<CoinType1, CoinType2>>,
    mint_event: event::EventHandle<MintEvent<CoinType1, CoinType2>>,
    burn_event: event::EventHandle<BurnEvent<CoinType1, CoinType2>>,
    swap_event: event::EventHandle<SwapEvent<CoinType1, CoinType2>>,
    sync_event: event::EventHandle<SyncEvent<CoinType1, CoinType2>>,
    flash_swap_event: event::EventHandle<FlashSwapEvent<CoinType1, CoinType2>>,
}

struct PairCreatedEvent<phantom CoinType1, phantom CoinType2> has drop, store {
    sender_address: address,
    meta: PairMeta,
}

struct MintEvent<phantom CoinType1, phantom CoinType2> has drop, store {
    sender_address: address,
    amount_x: u64,
    amount_y: u64,
}

struct BurnEvent<phantom CoinType1, phantom CoinType2> has drop, store {
    sender_address: address,
    amount_x: u64,
    amount_y: u64,
}

struct SwapEvent<phantom CoinType1, phantom CoinType2> has drop, store {
    sender_address: address,
    amount_x_in: u64,
    amount_y_in: u64,
    amount_x_out: u64,
    amount_y_out: u64,
}

struct SyncEvent<phantom CoinType1, phantom CoinType2> has drop, store {
    reserve_x: u64,
    reserve_y: u64,
}

struct FlashSwapEvent<phantom CoinType1, phantom CoinType2> has drop, store {
    sender_address: address,
    loan_coin_1: u64,
    loan_coin_2: u64,
    repay_coin_1: u64,
    repay_coin_2: u64,
}
```

## pair_created_event
```move
let pair_meta = get_pair_meta<CoinType1, CoinType2>();
event::emit_event(&mut events.pair_created_event, PairCreatedEvent {
    sender_address: signer::address_of(account),
    meta: pair_meta,
});
```

## mint_event
```move
event::emit_event(&mut events.mint_event, MintEvent {
    sender_address: signer::address_of(account),
    amount_x,
    amount_y,
});
```

## burn_event
```move
event::emit_event(&mut events.burn_event, BurnEvent {
    sender_address: signer::address_of(account),
    amount_x,
    amount_y,
});
```

## swap_event
```move
event::emit_event(&mut events.swap_event, SwapEvent {
    sender_address: signer::address_of(account),
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
});
```

## flash_swap_event
```move
event::emit_event(&mut events.flash_swap_event, FlashSwapEvent {
    sender_address: signer::address_of(account),
    loan_coin_1,
    loan_coin_2,
    repay_coin_1,
    repay_coin_2,
});
```