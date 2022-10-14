# Examples for contracts
Update your `Move.toml` with

```toml
[dependencies.AnimeSwap]
git = 'https://github.com/AnimeSwap/v1-core.git'
rev = 'v0.4.0'
subdir = 'Swap'
```

## Key public functions
```move
/// Swap X to Y
/// swap from X to Y
public fun swap_coins_for_coins<X, Y>(
    coins_in: Coin<X>,
): Coin<Y>

/// Create pair, and register events
/// require X < Y
public fun create_pair<X, Y>()

/// Add liquidity
/// require X < Y
public fun add_liquidity<X, Y>(
    account: &signer,
    amount_x_desired: u64,
    amount_y_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
)

/// Remove liquidity
/// require X < Y
public fun remove_liquidity<X, Y>(
    coins: Coin<LPCoin<X, Y>>,
    amount_x_min: u64,
    amount_y_min: u64,
): (Coin<X>, Coin<Y>)

/// Get flash swap coins. User can loan any coins, and repay in the same tx.
/// In most cases, user may loan one coin, and repay the same or the other coin.
/// require X < Y.
/// * `loan_coin_x` - expected amount of X coins to loan.
/// * `loan_coin_y` - expected amount of Y coins to loan.
/// Returns both loaned X and Y coins: `(Coin<X>, Coin<Y>, Flashloan<X, Y)`.
public fun flash_swap<X, Y>(
    loan_coin_x: u64,
    loan_coin_y: u64
): (Coin<X>, Coin<Y>, FlashSwap<X, Y>)

/// Repay flash swap coins.
/// User should repay amount, following the conditions:
/// `new_pool_1_value * new_pool_2_value >= old_pool_1_value * old_pool_2_value`
/// where `new_pool_x_value` is the `old_pool_x_value - amount_out + amount_in * (1 - swapFee)`,
/// and `pool_x_value` is the reserve amount for a given CoinType.
/// * `x_in` - X coins to pay.
/// * `y_in` - Y coins to pay.
/// * `flash_swap` - flash_swap return.
public fun pay_flash_swap<X, Y>(
    x_in: Coin<X>,
    y_in: Coin<Y>,
    flash_swap: FlashSwap<X, Y>
)
```

## Swap example
```move
use SwapDeployer::AnimeSwapPoolV1;
...
// swap X to `amount_out` Y
let amount_out = 100000;
let amount_in = AnimeSwapPoolV1::get_amounts_in_1_pair<X, Y>(amount);
// check if `amount_in` meets your demand
let coins_in = coin::withdraw(&account, amount_in);
let coins_out = AnimeSwapPoolV1::swap_coins_for_coins<X, Y>(coins_in);
assert!(coin::value(&coins_out) == amount_out, 2);
```

## Flash swap example:
```move
use SwapDeployer::AnimeSwapPoolV1Library;
use SwapDeployer::AnimeSwapPoolV1;
...
// loan `amount` X and repay Y
let amount = 100000;
let repay_amount = AnimeSwapPoolV1::get_amounts_in_1_pair<X, Y>(amount);
if (AnimeSwapPoolV1Library::compare<X, Y>()) {
    // flash loan X
    let (coins_in, coins_in_zero, flash_swap) = AnimeSwapPoolV1::flash_swap<X, Y>(amount, 0);
    coin::destroy_zero<Y>(coins_in_zero);
    // do something with coins_in and get coins_out
    let coins_out = f(coins_in);
    // repay Y
    let repay_coins = coin::extract(&mut coins_out, repay_amount);
    AnimeSwapPoolV1::pay_flash_swap<X, Y>(coin::zero<X>(), repay_coins, flash_swap);
} else {
    // flash loan X
    let (coins_in_zero, coins_in, flash_swap) = AnimeSwapPoolV1::flash_swap<Y, X>(0, amount);
    coin::destroy_zero<Y>(coins_in_zero);
    // do something with coins_in and get coins_out
    let coins_out = f(coins_in);
    // repay Y
    let repay_coins = coin::extract(&mut coins_out, repay_amount);
    AnimeSwapPoolV1::pay_flash_swap<Y, X>(repay_coins, coin::zero<X>(), flash_swap);
};
```