"use strict";
// we should keep our code dry ie reusablity !
function bmiCalculator(weight, height) {
  return Math.round(weight / Math.pow(height, 2));
  //return Math.floor(weight / height ** 2);
}
let bmi = bmiCalculator(65, 1.8);
console.log(bmi);
// Functions
function logger() {
  console.log("My name is Jonas");
}
// calling / running / invoking function
// technically it returns undefined
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number("23");
// Function declaration.
// Normal funtion.
// we can call it before initialization.
const age1 = calcAge1(1991);
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
// Function expression.
// Named or annonymous funtion.
// we can't call it before initialization.
// Hoisting So before initialization → value is undefined.
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
