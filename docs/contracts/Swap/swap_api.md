# Entry Functions
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
Add liquidity for `CoinType1` and `CoinType2`

:::caution
If pair not exist, transaction will auto **Create Pair first**
:::

* If pair not exist, it will create pair and add initial liquidity, that is to say, create coin `LPCoin<CoinType1, CoinType2>`
* At least `amount_x_min` and `amount_y_min` will be added to liquidity, otherwise tx will fail
* CoinType order not matters, but `CoinType1` should match `amount_x_desired` and `amount_x_min`, and `CoinType2` should match `amount_y_desired` and `amount_y_min`
* Emit `pair_created_event`, `mint_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2::AnimeSwapPoolV1::add_liquidity_entry \
--args u64:10000000000 u64:100000000 u64:1 u64:1 u64:1691479027 \
--type-args 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::USDT 0x1::aptos_coin::AptosCoin
```

## remove_liquidity_entry
```move
public entry fun remove_liquidity_entry<CoinType1, CoinType2>(account: &signer, liquidity: u64, amount_x_min: u64, amount_y_min: u64, deadline: u64)
```
Remove liquidity for `CoinType1` and `CoinType2`
* Require pair exists, otherwise tx will fail
* Burn `liquidity` amount `LPCoin<CoinType1, CoinType2>`
* At least `amount_x_min` and `amount_y_min` is returned, otherwise tx will fail
* CoinType order not matters, but `CoinType1` should match `amount_x_min`, and `CoinType2` should match `amount_y_min`
* Emit `burn_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2::AnimeSwapPoolV1::remove_liquidity_entry \
--args u64:1000 u64:1 u64:1 u64:1691479027 \
--type-args 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::BTC 0x1::aptos_coin::AptosCoin
```

## swap_exact_coins_for_coins_entry
```move
public entry fun swap_exact_coins_for_coins_entry<CoinType1, CoinType2>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
public entry fun swap_exact_coins_for_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
public entry fun swap_exact_coins_for_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_in: u64, amount_out_min: u64, to: address, deadline: u64)
```
Swap `CoinType1` for `CoinTypeX`, where `CoinTypeX` is the last type-arg
* Require all pairs exist, otherwise tx will fail
* Input exact `amount_in` `CoinType1` and output at least `amount_out_min` `CoinTypeX`, to `to` address
* If `to` address is equal to `account`, tx will auto register `CoinTypeX` for `to` address
* If `to` address is not equal to `account`, user should register `CoinTypeX` to `to` address manually, otherwise tx will fail
* Emit `swap_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2::AnimeSwapPoolV1::swap_exact_coins_for_coins_entry \
--args u64:100 u64:1 address:<0xUser> u64:1691479027 \
--type-args 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::BTC 0x1::aptos_coin::AptosCoin
```

## swap_coins_for_exact_coins_entry
```move
public entry fun swap_coins_for_exact_coins_entry<CoinType1, CoinType2>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
public entry fun swap_coins_for_exact_coins_2_pair_entry<CoinType1, CoinType2, CoinType3>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
public entry fun swap_coins_for_exact_coins_3_pair_entry<CoinType1, CoinType2, CoinType3, CoinType4>(account: &signer, amount_out: u64, amount_in_max: u64, to: address, deadline: u64)
```
Swap `CoinType1` for `CoinTypeX`, where `CoinTypeX` is the last type-arg
* Require all pairs exist, otherwise tx will fail
* Input at least `amount_in` `CoinType1` and output exact `amount_out_min` `CoinTypeX`, to `to` address
* If `to` address is equal to `account`, tx will auto register `CoinTypeX` for `to` address
* If `to` address is not equal to `account`, user should register `CoinTypeX` to `to` address manually, otherwise tx will fail
* Emit `swap_event`, `sync_event`
* CLI example:
```
aptos move run --function-id 0xe73ee18380b91e37906a728540d2c8ac7848231a26b99ee5631351b3543d7cf2::AnimeSwapPoolV1::swap_coins_for_exact_coins_entry \
--args u64:100 u64:1000000000 address:<0xUser> u64:1691479027 \
--type-args 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::BTC 0x1::aptos_coin::AptosCoin
```