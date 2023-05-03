# Entry Functions
```move
public entry fun add_liquidity_entry<X, Y>(account: &signer, amount_x_desired: u64, amount_y_desired: u64, amount_x_min: u64, amount_y_min: u64)
public entry fun remove_liquidity_entry<X, Y>(account: &signer, liquidity: u64, amount_x_min: u64, amount_y_min: u64)
public entry fun swap_exact_coins_for_coins_entry<X, Y>(account: &signer, amount_in: u64, amount_out_min: u64)
public entry fun swap_exact_coins_for_coins_2_pair_entry<X, Y, Z>(account: &signer, amount_in: u64, amount_out_min: u64)
public entry fun swap_exact_coins_for_coins_3_pair_entry<X, Y, Z, W>(account: &signer, amount_in: u64, amount_out_min: u64)
public entry fun swap_coins_for_exact_coins_entry<X, Y>(account: &signer, amount_out: u64, amount_in_max: u64)
public entry fun swap_coins_for_exact_coins_2_pair_entry<X, Y, Z>(account: &signer, amount_out: u64, amount_in_max: u64)
public entry fun swap_coins_for_exact_coins_3_pair_entry<X, Y, Z, W>(account: &signer, amount_out: u64, amount_in_max: u64)
```

## add_liquidity_entry
```move
public entry fun add_liquidity_entry<X, Y>(account: &signer, amount_x_desired: u64, amount_y_desired: u64, amount_x_min: u64, amount_y_min: u64)
```
Add liquidity for `X` and `Y`

:::caution
If pair not exist, transaction will auto **Create Pair first**
:::

* If pair not exist, it will create pair and add initial liquidity, that is to say, create coin `LPCoin<X, Y>`
* At least `amount_x_min` and `amount_y_min` will be added to liquidity, otherwise tx will fail
* CoinType order not matters, but `X` should match `amount_x_desired` and `amount_x_min`, and `Y` should match `amount_y_desired` and `amount_y_min`
* Emit `pair_created_event`, `mint_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1::add_liquidity_entry \
--args u64:10000000000 u64:100000000 u64:1 u64:1 \
--type-args 0x1::aptos_coin::AptosCoin 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeCoin::ANI
```

## remove_liquidity_entry
```move
public entry fun remove_liquidity_entry<X, Y>(account: &signer, liquidity: u64, amount_x_min: u64, amount_y_min: u64)
```
Remove liquidity for `X` and `Y`
* Require pair exists, otherwise tx will fail
* Burn `liquidity` amount `LPCoin<X, Y>`
* At least `amount_x_min` and `amount_y_min` is returned, otherwise tx will fail
* CoinType order not matters, but `X` should match `amount_x_min`, and `Y` should match `amount_y_min`
* Emit `burn_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1::remove_liquidity_entry \
--args u64:1000 u64:1 u64:1 \
--type-args 0x1::aptos_coin::AptosCoin 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeCoin::ANI
```

## swap_exact_coins_for_coins_entry
```move
public entry fun swap_exact_coins_for_coins_entry<X, Y>(account: &signer, amount_in: u64, amount_out_min: u64)
public entry fun swap_exact_coins_for_coins_2_pair_entry<X, Y, Z>(account: &signer, amount_in: u64, amount_out_min: u64)
public entry fun swap_exact_coins_for_coins_3_pair_entry<X, Y, Z, W>(account: &signer, amount_in: u64, amount_out_min: u64)
```
Swap `X` for `CoinTypeW`, where `CoinTypeW` is the last type-arg
* Require all pairs exist, otherwise tx will fail
* Input exact `amount_in` `X` and output at least `amount_out_min` `CoinTypeW`
* Emit `swap_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1::swap_exact_coins_for_coins_entry \
--args u64:100 u64:1 \
--type-args 0x1::aptos_coin::AptosCoin 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeCoin::ANI
```

## swap_coins_for_exact_coins_entry
```move
public entry fun swap_coins_for_exact_coins_entry<X, Y>(account: &signer, amount_out: u64, amount_in_max: u64)
public entry fun swap_coins_for_exact_coins_2_pair_entry<X, Y, Z>(account: &signer, amount_out: u64, amount_in_max: u64)
public entry fun swap_coins_for_exact_coins_3_pair_entry<X, Y, Z, W>(account: &signer, amount_out: u64, amount_in_max: u64)
```
Swap `X` for `CoinTypeW`, where `CoinTypeW` is the last type-arg
* Require all pairs exist, otherwise tx will fail
* Input at least `amount_in` `X` and output exact `amount_out_min` `CoinTypeW`
* Emit `swap_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeSwapPoolV1::swap_coins_for_exact_coins_entry \
--args u64:100 u64:1000000000 \
--type-args 0x1::aptos_coin::AptosCoin 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::AnimeCoin::ANI
```