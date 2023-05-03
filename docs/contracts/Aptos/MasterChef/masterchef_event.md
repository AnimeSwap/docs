# Events
```move
// events
struct Events<phantom X> has key {
    add_event: event::EventHandle<CoinMeta<X>>,
    set_event: event::EventHandle<CoinMeta<X>>,
    deposit_event: event::EventHandle<DepositWithdrawEvent<X>>,
    withdraw_event: event::EventHandle<DepositWithdrawEvent<X>>,
    emergency_withdraw_event: event::EventHandle<DepositWithdrawEvent<X>>,
}

// add/set event data
struct CoinMeta<phantom X> has drop, store, copy {
    alloc_point: u64,
}

// deposit/withdraw event data
struct DepositWithdrawEvent<phantom X> has drop, store {
    amount: u64,
    amount_ANI: u64,
}
```