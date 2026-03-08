// Hoisting and TDZ in Practice
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'; //undefined
let job = 'teacher'; //uninitialised
const year = 1991; //uninitialised

// Functions Hoisting
// console.log(addDecl(2, 3)); //defined
// console.log(addExpr(2, 3)); //undefined
// console.log(addArrow(2, 3));//undefined

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example TDZ
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
// variables created via var keywoard creates property inside window() object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
