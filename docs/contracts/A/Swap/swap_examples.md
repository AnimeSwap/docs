# Examples for contracts
Update your `Move.toml` with

```toml
[dependencies.AnimeSwap]
git = 'https://github.com/AnimeSwap/sui-v1-core.git'
rev = 'v1.0.0'
```

## Key public functions
```move
/// swap from Coin to Coin, both sides
/// require X < Y
public fun swap_coins_for_coins<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_x_in: Coin<X>,
    coins_y_in: Coin<Y>,
    ctx: &mut TxContext,
): (Coin<X>, Coin<Y>);

/// create pair function
/// require X < Y
public fun create_pair<X, Y>(
    lps: &mut LiquidityPools,
    ctx: &mut TxContext,
);

/// add liqudity
/// require X < Y
public fun add_liquidity<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coin_x_origin: Coin<X>,
    coin_y_origin: Coin<Y>,
    amount_x_desired: u64,
    amount_y_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
    ctx: &mut TxContext,
): Coin<LPCoin<X, Y>>;

/// remove liqudity
/// require X < Y
public fun remove_liquidity<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    liquidity: Coin<LPCoin<X, Y>>,
    liquidity_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
    ctx: &mut TxContext,
): (Coin<X>, Coin<Y>);

/// Get flash swap coins. User can loan any coins, and repay in the same tx.
/// In most cases, user may loan one coin, and repay the same or the other coin.
/// require X < Y.
/// * `loan_coin_x` - expected amount of X coins to loan.
/// * `loan_coin_y` - expected amount of Y coins to loan.
/// Returns both loaned X and Y coins: `(Coin<X>, Coin<Y>, Flashloan<X, Y)`.
public fun flash_swap<X, Y>(
    lps: &mut LiquidityPools,
    loan_coin_x: u64,
    loan_coin_y: u64,
): (Balance<X>, Balance<Y>, FlashSwap<X, Y>);

/// Repay flash swap coins.
/// User should repay amount, following the conditions:
/// `new_pool_1_value * new_pool_2_value >= old_pool_1_value * old_pool_2_value`
/// where `new_pool_x_value` is the `old_pool_x_value - amount_out + amount_in * (1 - swapFee)`,
/// and `pool_x_value` is the reserve amount for a given CoinType.
/// * `x_in` - X coins to pay.
/// * `y_in` - Y coins to pay.
/// * `flash_swap` - flash_swap return.
public fun pay_flash_swap<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    x_in: Balance<X>,
    y_in: Balance<Y>,
    flash_swap: FlashSwap<X, Y>,
);
```

## Swap example
```move
use animeswap::animeswap_library;
use animeswap::animeswap::{Self, LiquidityPools};
...
fun swap_pair<X, Y> (
    lps: &mut LiquidityPools,
    clock: &Clock,
    x_in: Coin<X>,
    ctx: &mut TxContext,
): Coin<Y> {
    // if you can ensure `animeswap_library::compare<X, Y>()` is always true from caller, you can simplify this
    if (animeswap_library::compare<X, Y>()) {
        let (zero, coins_out) = animeswap::swap_coins_for_coins<X, Y>(
            lps,
            clock,
            x_in,
            coin::zero(ctx),
            ctx,
        );
        coin::destroy_zero(zero);
        coins_out
    } else {
        let (coins_out, zero) = animeswap::swap_coins_for_coins<Y, X>(
            lps,
            clock,
            coin::zero(ctx),
            x_in,
            ctx,
        );
        coin::destroy_zero(zero);
        coins_out
    }
}
```

## Flash swap example:
```move
use animeswap::animeswap_library;
use animeswap::animeswap::{Self, LiquidityPools};
...
fun swap_pair_with_flash_swap<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    x_in: Coin<X>,
    amount: u64,
    ctx: &mut TxContext,
) {
    if (animeswap_library::compare<X, Y>()) {
        // flash loan Y
        let (balance_in_zero, balance_in, flash_swap) = animeswap::flash_swap<X, Y>(lps, 0, borrow_amount);
        balance::destroy_zero<X>(balance_in_zero);
        let coin_in = coin::from_balance<Y>(balance_in, ctx);
        // do something
        coins_out = f(coins_in);
        // repay X
        let repay_coins = coin::split(&mut coins_out, amount, ctx);
        animeswap::pay_flash_swap<X, Y>(lps, clock, coin::into_balance<X>(repay_coins), balance::zero<Y>(), flash_swap);
    } else {
        // flash loan Y
        let (balance_in, balance_in_zero, flash_swap) = animeswap::flash_swap<Y, X>(lps, 0, borrow_amount);
        balance::destroy_zero<X>(balance_in_zero);
        let coin_in = coin::from_balance<Y>(balance_in, ctx);
        // do something
        coins_out = f(coins_in);
        // repay X
        let repay_coins = coin::split(&mut coins_out, amount, ctx);
        animeswap::pay_flash_swap<Y, X>(lps, clock, balance::zero<Y>(), coin::into_balance<X>(repay_coins), flash_swap);
    };
}