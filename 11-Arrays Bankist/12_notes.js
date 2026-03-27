// inludes some   every
'use strict';
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
// Includes checking by equality any element.
const value_1 = movements.includes(-130);
// Some     checking by condition any element.
const value_2 = movements.some((mov) => mov === -130);
// Some     checking by condition any element.
const value_3 = movements.some((mov) => mov > 0);
console.log('includes', value_1);
console.log('some    ', value_2);
console.log('some    ', value_3);

// Every checking by condition every element.
const value_4 = movements.every((mov) => mov > 0);
const value_5 = account4.movements.every((mov) => mov > 0);
console.log('every', value_4);
console.log('every', value_5);

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
