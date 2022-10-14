# Entry Functions
```move
public entry fun deposit<CoinType>(account: &signer, amount: u64)
public entry fun withdraw<CoinType>(account: &signer, amount: u64)
public entry fun enter_staking(account: &signer, amount: u64)
public entry fun leave_staking(account: &signer, amount: u64)
public entry fun emergency_withdraw<CoinType>(account: &signer)
```

## deposit
```move
public entry fun deposit<CoinType>(account: &signer, amount: u64)
```
Deposit `CoinType` to masterchef, and get pending `ANI` reward
* `CoinType` should already been added to masterchef by admin
* `amount` can be `0` for getting `ANI` reward only
* Emit `deposit_event`
* CLI example:
```
aptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::deposit \
--args u64:1000 \
--type-args 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::LPCoinV1::LPCoin\<0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::BTC,0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::USDT\>
```

## withdraw
```move
public entry fun withdraw<CoinType>(account: &signer, amount: u64)
```
Withdraw `CoinType` from masterchef, and get pending `ANI` reward
* `amount` should be less or equal than the amount deposit before
* `amount` can be `0` for getting `ANI` reward only
* Emit `withdraw_event`
* CLI example:
```
aptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::withdraw \
--args u64:1000 \
--type-args 0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::LPCoinV1::LPCoin\<0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::BTC,0x16fe2df00ea7dde4a63409201f7f4e536bde7bb7335526a35d05111e68aa322c::TestCoinsV1::USDT\>
```

## emergency_withdraw
```move
public entry fun emergency_withdraw<CoinType>(account: &signer)
```
Withdraw without caring about rewards. **EMERGENCY ONLY**.
* Pending `ANI` reward will be lost
* Emit `emergency_withdraw_event`

## enter_staking & leave_staking
```move
public entry fun enter_staking(account: &signer, amount: u64)
public entry fun leave_staking(account: &signer, amount: u64)
```
* `enter_staking` is alias as `deposit<ANI>`
* `leave_staking` is alias as `withdraw<ANI>`
* CLI example:
```
aptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::enter_staking \
--args u64:100000000
aptos move run --function-id 0x3e8c3184eef4aba3a91e2d99a08c47354320bc0b4d3ce7d5216d58ecacc0ef78::AnimeMasterChefV1::leave_staking \
--args u64:100000000
```