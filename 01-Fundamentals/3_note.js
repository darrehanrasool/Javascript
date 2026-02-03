// funtion keywoard is used to define funtion in javascript.
// var is visible everywhere inside the function,
// even outside blocks (if,elseif,else,for,switch etc).
// because var ignores blocks and belongs to the function.
// funtion scoped
// we can reasign the value
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
testVar(); // 10
// let exists only inside the block { } where it is declared.
// block scoped
// we can reasign the value.
function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y);
  //y is unaccesible outside the block.
}
testLet(); //Error
// const exists only inside the block { } where it is declared.
// const Block scoped
// we can't reasign the value here
function testConst() {
  if (true) {
    const z = 30;
  }
  console.log(z);
  //z is unaccesible outside the block
}

testConst(); // Error
// const numNeighbours = prompt("How many neighbour countries does your country have?",);
// here if we see the output it's string.
// as if we are using switch there is strict equality.
// LATER : This helps us prevent bugs Type conversion or Type casting.
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?"),
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
