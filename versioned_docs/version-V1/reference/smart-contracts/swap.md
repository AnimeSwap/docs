# Entry functions
```move
public entry fun create_pair_entry<CoinType1, CoinType2>(account: &signer, amount_x: u64, amount_y: u64, deadline: u64)
public entry fun add_liquidity_entry<CoinType1, CoinType2>(account: &signer, amount_x_desired: u64, amount_y_desired: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
public entry fun remove_liquidity_entry<CoinType1, CoinType2>(account: &signer, liquidity: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
public entry fun swap_exact_coins_for_coins_entry<CoinType1, CoinType2>(account: &signer, amount_in: u64, amount_out_min: u64, deadline: u64)
public entry fun swap_exact_coins_for_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_in: u64, amount_out_min: u64, deadline: u64)
public entry fun swap_exact_coins_for_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_in: u64, amount_out_min: u64, deadline: u64)
public entry fun swap_coins_for_exact_coins_entry<CoinType1, CoinType2>(account: &signer, amount_out: u64, amount_in_max: u64, deadline: u64)
public entry fun swap_coins_for_exact_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_out: u64, amount_in_max: u64, deadline: u64)
public entry fun swap_coins_for_exact_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_out: u64, amount_in_max: u64, deadline: u64)
```

## create_pair_entry
```move
public entry fun create_pair_entry<CoinType1, CoinType2>(account: &signer, amount_x: u64, amount_y: u64, deadline: u64)
```
create a pair for `CoinType1` and `CoinType2` and add initial liquidity `amount_x` for `CoinType1`, `amount_y` for `CoinType2`.
* require pair not exists, otherwise tx will fail
* create coin `LPCoin<CoinType1, CoinType2>`
* TODO emit `PairCreated`

## add_liquidity_entry
```move
public entry fun add_liquidity_entry<CoinType1, CoinType2>(account: &signer, amount_x_desired: u64, amount_y_desired: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
```
add liquidity for `CoinType1` and `CoinType2`
* require pair exists, otherwise tx will fail
* at least `amount_x_min` and `amount_y_min` is added to liquidity, otherwise tx will fail
* emit `mint_event`, `sync_event`

## remove_liquidity_entry
```move
public entry fun remove_liquidity_entry<CoinType1, CoinType2>(account: &signer, liquidity: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
```
remove liquidity for `CoinType1` and `CoinType2`
* require pair exists, otherwise tx will fail
* at least `amount_x_min` and `amount_y_min` is returned, otherwise tx will fail
* emit `burn_event`, `sync_event`

## swap_exact_coins_for_coins_entry
```move
public entry fun swap_exact_coins_for_coins_entry<CoinType1, CoinType2>(account: &signer, amount_in: u64, amount_out_min: u64, deadline: u64)
public entry fun swap_exact_coins_for_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_in: u64, amount_out_min: u64, deadline: u64)
public entry fun swap_exact_coins_for_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_in: u64, amount_out_min: u64, deadline: u64)
```
swap `CoinType1` for `CoinTypeX`, where `CoinTypeX` is the last type-arg
* require all pairs exist, otherwise tx will fail
* input exact `amount_in` `CoinType1` and output at least `amount_out_min` `CoinTypeX`
* emit `swap_event`, `sync_event`

## swap_coins_for_exact_coins_entry
```move
public entry fun swap_coins_for_exact_coins_entry<CoinType1, CoinType2>(account: &signer, amount_out: u64, amount_in_max: u64, deadline: u64)
public entry fun swap_coins_for_exact_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_out: u64, amount_in_max: u64, deadline: u64)
public entry fun swap_coins_for_exact_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_out: u64, amount_in_max: u64, deadline: u64)
```
swap `CoinType1` for `CoinTypeX`, where `CoinTypeX` is the last type-arg
* require all pairs exist, otherwise tx will fail
* input at least `amount_in` `CoinType1` and output exact `amount_out_min` `CoinTypeX`
* emit `swap_event`, `sync_event`

# Events
```move
struct Events has key {
    mint_event: event::EventHandle<MintEvent>,
    burn_event: event::EventHandle<BurnEvent>,
    swap_event: event::EventHandle<SwapEvent>,
    sync_event: event::EventHandle<SyncEvent>,
}

struct MintEvent has drop, store {
    amount_x: u64,
    amount_y: u64,
}

struct BurnEvent has drop, store {
    amount_x: u64,
    amount_y: u64,
}

struct SwapEvent has drop, store {
    amount_x_in: u64,
    amount_y_in: u64,
    amount_x_out: u64,
    amount_y_out: u64,
}

struct SyncEvent has drop, store {
    reserve_x: u64,
    reserve_y: u64,
}
```

## TODO create_pair

## mint_event
```move
event::emit_event(&mut events.mint_event, MintEvent {
    amount_x,
    amount_y,
});
```

## burn_event
```move
event::emit_event(&mut events.burn_event, BurnEvent {
    amount_x,
    amount_y,
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
});
```