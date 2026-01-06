// Assignment 1
let country = "india";
let district = "kashmere";
let population = 10;
console.log(country);
console.log(district);
console.log(population);
// Assignment 2
let isIsland = true;
let language = "Kashmere";
console.log(typeof country);
console.log(typeof district);
console.log(typeof population);
console.log(typeof language);
// single line comment
/* multiline comment in javascript */
// const job; this will throw an error  as it can't be empty if its const variable

// var is visible everywhere inside the function, even outside blocks (if, for, etc.).
// Because var ignores blocks and belongs to the function
// funtion scoped
// we can reasign the value
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
testVar(); // 10
//let exists only inside { } where it is declared.
// Block scoped
// we can reasign the value
function testLet() {
  if (true) {
    let y = 20;
  }
  //   y is unaccesible outside the block where its declared
  console.log(y);
}

testLet(); // ❌ Error
// const Block scoped
// we can't reasign the value here
function testConst() {
  if (true) {
    const z = 30;
  }
  //   z is unaccesible outside the block where its declared
  console.log(z);
}

testConst(); // ❌ Error
