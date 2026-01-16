// funtion keywoard is used to define funtion in javascript
// var is visible everywhere inside the function, even outside blocks (if, for, etc.).
// Because var ignores blocks and belongs to the function critical issue here ie for security
// funtion scoped
// we can reasign the value
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
testVar(); // 10
//let exists only inside the block { } where it is declared.
// Block scoped
// we can reasign the value
function testLet() {
  if (true) {
    let y = 20;
  }
  //   y is unaccesible outside the block
  console.log(y);
}

testLet(); // ❌ Error
// const exists only inside the block { } where it is declared.
// const Block scoped
// we can't reasign the value here
function testConst() {
  if (true) {
    const z = 30;
  }
  //   z is unaccesible outside the block
  console.log(z);
}

testConst(); // ❌ Error
