# Resources
```move
// info of each user, store at user's address
struct UserInfo<phantom X> has key, store, copy {
    amount: u64,    // `amount` LP coin amount the user has provided.
    reward_debt: u128,    // Reward debt. See explanation below.
    //
    // We do some fancy math here. Basically, any point in time, the amount of ANIs
    // entitled to a user but is pending to be distributed is:
    //
    //   pending reward = (user.amount * pool.acc_ANI_per_share) - user.reward_debt
    //
    // Whenever a user deposits or withdraws LP coins to a pool. Here's what happens:
    //   1. The pool's `acc_ANI_per_share` (and `last_reward_timestamp`) gets updated.
    //   2. User receives the pending reward sent to his/her address.
    //   3. User's `amount` gets updated.
    //   4. User's `reward_debt` gets updated.
}

// info of each pool, store at resource account address
struct PoolInfo<phantom X> has key, store {
    coin_reserve: Coin<X>,
    acc_ANI_per_share: u128,    // times ACC_ANI_PRECISION
    last_reward_timestamp: u64,
    alloc_point: u64,
}

struct MasterChefData has drop, key {
    signer_cap: SignerCapability,
    total_alloc_point: u64,
    admin_address: address,
    dao_address: address,   // dao fee to address
    dao_percent: u64,   // dao fee percent
    last_timestamp_dao_withdraw: u64,  // Last timestamp then develeper withdraw dao fee
    start_timestamp: u64,   // mc mint ANI start from this ts
    per_second_ANI: u128, // default ANI per second, 1 ANI/second = 86400 ANI/day
}
```