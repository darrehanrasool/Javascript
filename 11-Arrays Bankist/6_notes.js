// The filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
const withdrawals = movements.filter((mov, i, arr) => {
  return mov < 0;
});
console.log(withdrawals);
console.log(deposits);
console.log(withdrawals);

// The for of loop
const depositsFor_1 = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor_1.push(mov);
  }
}
const depositsFor_2 = [];
for (const mov of movements) {
  if (mov < 0) {
    depositsFor_2.push(mov)
  }
}
console.log(depositsFor_1);
console.log(depositsFor_2);


