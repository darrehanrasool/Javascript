// operators in javascript programing language
// Basic operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 exponetiation
// string concatination
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators in javascript
//let x = 10 + 5; // 15
//x += 10; // x = x + 10 = 25
//x *= 4; // x = x * 4 = 100
//x++; //post increament
//x--; //post decrement
//++x: //pre increment
//--X: //pre decrement
console.log(x);
// Comparison operators in javascript
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
// Operator Precedence in javascript programing language
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
