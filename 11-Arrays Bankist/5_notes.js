// The map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD_1 = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSD_2 = movements.map((mov) => {
  return mov * eurToUsd;
});

console.log(movementsUSD_1);
console.log(movementsUSD_2);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, movements) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
    mov,
  )}`;
});
console.log(movementsDescriptions);
