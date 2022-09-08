# Entry functions
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
deposit `CoinType` to masterchef, and get pending `ANI` reward
* `CoinType` should already been added to masterchef by admin
* `amount` can be `0` for getting `ANI` reward only
* emit `deposit_event`

## withdraw
```move
public entry fun withdraw<CoinType>(account: &signer, amount: u64)
```
withdraw `CoinType` from masterchef, and get pending `ANI` reward
* `amount` should be less or equal than the amount deposit before
* `amount` can be `0` for getting `ANI` reward only
* emit `withdraw_event`

## emergency_withdraw
```move
public entry fun emergency_withdraw<CoinType>(account: &signer)
```
withdraw without caring about rewards. EMERGENCY ONLY.
* pending `ANI` reward will be lost
* emit `emergency_withdraw_event`

## enter_staking & leave_staking
```move
public entry fun enter_staking(account: &signer, amount: u64)
public entry fun leave_staking(account: &signer, amount: u64)
```
* `enter_staking` is alias as `deposit<ANI>`
* `leave_staking` is alias as `withdraw<ANI>`