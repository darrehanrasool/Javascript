'use strict';
// find findLast findLastIndex
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};
const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Return type first element that satisfies the condition.
const firstWithdrawal = movements.find((mov) => {
  return mov < 0;
});
console.log(firstWithdrawal);

// Return type first element that satisfies the condition.
const account_1 = accounts.find((acc) => {
  return acc.owner === 'Jessica Davis';
});

// Return type first element index that satisfies the condition.
const account_2 = accounts.findIndex((acc) => {
  return acc.owner === 'Jessica Davis';
})
console.log(account_1);
console.log(account_2);
// Return type last element that satisfies the condition.
const lastWithdrawal = movements.findLast((mov) => {
  return mov < 0;
});
console.log(lastWithdrawal);

// Return type last element index that satisfies the condition.
const latestLargeMovementIndex = movements.findLastIndex((mov) => {
  return Math.abs(mov) > 1000;
});
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${movements.length - latestLargeMovementIndex
  } movements ago`,
);
