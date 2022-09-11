# Entry functions
```move
public entry fun add_liquidity_entry<CoinType1, CoinType2>(account: &signer, amount_x_desired: u64, amount_y_desired: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
public entry fun remove_liquidity_entry<CoinType1, CoinType2>(account: &signer, liquidity: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
public entry fun swap_exact_coins_for_coins_entry<CoinType1, CoinType2>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
public entry fun swap_exact_coins_for_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
public entry fun swap_exact_coins_for_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
public entry fun swap_coins_for_exact_coins_entry<CoinType1, CoinType2>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
public entry fun swap_coins_for_exact_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
public entry fun swap_coins_for_exact_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
```

## add_liquidity_entry
```move
public entry fun add_liquidity_entry<CoinType1, CoinType2>(account: &signer, amount_x_desired: u64, amount_y_desired: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
```
add liquidity for `CoinType1` and `CoinType2`. If pair not exist, tx will auto create pair first
* if pair not exist, it will create pair and add initial liquidity, that is to say, create coin `LPCoin<CoinType1, CoinType2>`
* at least `amount_x_min` and `amount_y_min` will be added to liquidity, otherwise tx will fail
* CoinType order not matters, but `CoinType1` should match `amount_x_desired` and `amount_x_min`, and `CoinType2` should match `amount_y_desired` and `amount_y_min`
* emit `pair_created_event`, `mint_event`, `sync_event`

## remove_liquidity_entry
```move
public entry fun remove_liquidity_entry<CoinType1, CoinType2>(account: &signer, liquidity: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
```
remove liquidity for `CoinType1` and `CoinType2`
* require pair exists, otherwise tx will fail
* burn `liquidity` amount `LPCoin<CoinType1, CoinType2>`
* at least `amount_x_min` and `amount_y_min` is returned, otherwise tx will fail
* CoinType order not matters, but `CoinType1` should match `amount_x_min`, and `CoinType2` should match `amount_y_min`
* emit `burn_event`, `sync_event`

## swap_exact_coins_for_coins_entry
```move
public entry fun swap_exact_coins_for_coins_entry<CoinType1, CoinType2>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
public entry fun swap_exact_coins_for_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
public entry fun swap_exact_coins_for_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
```
swap `CoinType1` for `CoinTypeX`, where `CoinTypeX` is the last type-arg
* require all pairs exist, otherwise tx will fail
* input exact `amount_in` `CoinType1` and output at least `amount_out_min` `CoinTypeX`, to `to` address
* if `to` address is equal to `account`, tx will auto register `CoinTypeX` for `to` address
* if `to` address is not equal to `account`, user should register `CoinTypeX` to `to` address manually, otherwise tx will fail
* emit `swap_event`, `sync_event`

## swap_coins_for_exact_coins_entry
```move
public entry fun swap_coins_for_exact_coins_entry<CoinType1, CoinType2>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
public entry fun swap_coins_for_exact_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
public entry fun swap_coins_for_exact_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
```
swap `CoinType1` for `CoinTypeX`, where `CoinTypeX` is the last type-arg
* require all pairs exist, otherwise tx will fail
* input at least `amount_in` `CoinType1` and output exact `amount_out_min` `CoinTypeX`, to `to` address
* if `to` address is equal to `account`, tx will auto register `CoinTypeX` for `to` address
* if `to` address is not equal to `account`, user should register `CoinTypeX` to `to` address manually, otherwise tx will fail
* emit `swap_event`, `sync_event`