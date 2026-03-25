// The Reduce Method.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// via Anonnymous Funtion
const balance_0 = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

// via Arrow  Funtion.
const balance_1 = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance_1);

// via For of Loop Funtion
let balance_2 = 0;
for (const mov of movements) {
  balance_2 += mov;
}
console.log(balance_2);

// Maximum value via reduce method
const max = movements.reduce((acc, cur, i, arr) => {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
}, movements[0]);
console.log(max);
