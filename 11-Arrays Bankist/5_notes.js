// The map Method
const eurToUsd = 1.1;

const movementsUSD_1 = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSD_2 = movements.map((mov) => {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD_1);
console.log(movementsUSD_2);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov,
    )}`,
);
console.log(movementsDescriptions);
