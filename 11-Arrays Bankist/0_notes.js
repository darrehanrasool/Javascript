// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE it will not mutate the original array.
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
// SPLICE it will mutate the original array.
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
// REVERSE it will mutate the original array.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
// CONCAT it will not mutate the original array.
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
// JOIN it will not mutate the original array.
console.log(letters.join(' - '));
