// forEach With Maps 
const currenciesMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currenciesMap.forEach(function (value, key, map) {
  console.log(map);
  console.log(`${key}: ${value}`);
});
// forEach With  Set
const currenciesSet = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesSet);
currenciesSet.forEach(function (value, next, set) {
  console.log(set);
  console.log(next);
  console.log(`${value}: ${value}`);
});
// - throw away or unnessary variable name
