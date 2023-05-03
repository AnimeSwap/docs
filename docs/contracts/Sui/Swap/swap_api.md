# Entry Functions
```move
public entry fun add_liquidity_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coin_x_origin: Coin<X>,
    coin_y_origin: Coin<Y>,
    amount_x_desired: u64,
    amount_y_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
    ctx: &mut TxContext,
);
public entry fun remove_liquidity_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    liquidity: Coin<LPCoin<X, Y>>,
    liquidity_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
    ctx: &mut TxContext,
);
public entry fun swap_exact_coins_for_coins_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_in: u64,
    amount_out_min: u64,
    ctx: &mut TxContext,
);
public entry fun swap_exact_coins_for_coins_2_pair_entry<X, Y, Z>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_in: u64,
    amount_out_min: u64,
    ctx: &mut TxContext,
);
public entry fun swap_coins_for_exact_coins_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_out: u64,
    amount_in_max: u64,
    ctx: &mut TxContext,
);
public entry fun swap_coins_for_exact_coins_2_pair_entry<X, Y, Z>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_out: u64,
    amount_in_max: u64,
    ctx: &mut TxContext,
);
```

## add_liquidity_entry
```move
public entry fun add_liquidity_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coin_x_origin: Coin<X>,
    coin_y_origin: Coin<Y>,
    amount_x_desired: u64,
    amount_y_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
    ctx: &mut TxContext,
);
```
Add liquidity for `X` and `Y`

:::caution
If pair not exist, transaction will auto **Create Pair first**
:::

* If pair not exist, it will create pair and add initial liquidity, that is to say, create coin `LPCoin<X, Y>`
* At least `amount_x_min` and `amount_y_min` will be added to liquidity, otherwise tx will fail
* CoinType order not matters, but `X` should match `amount_x_desired` and `amount_x_min`, and `Y` should match `amount_y_desired` and `amount_y_min`
* Emit `pair_created_event`, `mint_event`, `sync_event`


## remove_liquidity_entry
```move
public entry fun remove_liquidity_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    liquidity: Coin<LPCoin<X, Y>>,
    liquidity_desired: u64,
    amount_x_min: u64,
    amount_y_min: u64,
    ctx: &mut TxContext,
);
```
Remove liquidity for `X` and `Y`
* Require pair exists, otherwise tx will fail
* Burn `liquidity` amount `LPCoin<X, Y>`
* At least `amount_x_min` and `amount_y_min` is returned, otherwise tx will fail
* CoinType order not matters, but `X` should match `amount_x_min`, and `Y` should match `amount_y_min`
* Emit `burn_event`, `sync_event`


## swap_exact_coins_for_coins_entry
```move
public entry fun swap_exact_coins_for_coins_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_in: u64,
    amount_out_min: u64,
    ctx: &mut TxContext,
);
public entry fun swap_exact_coins_for_coins_2_pair_entry<X, Y, Z>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_in: u64,
    amount_out_min: u64,
    ctx: &mut TxContext,
);
```
Swap `X` for `CoinTypeW`, where `CoinTypeW` is the last type-arg
* Require all pairs exist, otherwise tx will fail
* Input exact `amount_in` `X` and output at least `amount_out_min` `CoinTypeW`
* Emit `swap_event`, `sync_event`

## swap_coins_for_exact_coins_entry
```move
public entry fun swap_coins_for_exact_coins_entry<X, Y>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_out: u64,
    amount_in_max: u64,
    ctx: &mut TxContext,
);
public entry fun swap_coins_for_exact_coins_2_pair_entry<X, Y, Z>(
    lps: &mut LiquidityPools,
    clock: &Clock,
    coins_in_origin: Coin<X>,
    amount_out: u64,
    amount_in_max: u64,
    ctx: &mut TxContext,
);
```
Swap `X` for `CoinTypeW`, where `CoinTypeW` is the last type-arg
* Require all pairs exist, otherwise tx will fail
* Input at least `amount_in` `X` and output exact `amount_out_min` `CoinTypeW`
* Emit `swap_event`, `sync_event`