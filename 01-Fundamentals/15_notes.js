let me = {
  name: "rehan",
};
let age_rehan = 15;
let profile = "rehan";
console.log(me);
console.log(age_rehan);
console.log(profile);
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);
let year;
console.log(year); //undefined primitive data type
console.log(typeof year); //undefined primitive data type
year = 1991;
console.log(typeof year); // number
console.log(typeof null); // object
// there is a bug in javascript it should return null,it returns object,as null is not an object.
// creating variables via different keywoards in javascript programing language ie let const var.
// we can mutate the variable value later block scoped
let age = 30;
age = 31;
// we can't mutate the variable value later block scoped
const birthYear = 1991;
// birthYear = 1990;
// const job; it will throw error as const variable can't be empty.
// we can mutate the variable value later funtion scoped
var job = "programmer";
job = "teacher";
//here i am defining the variable without proper keywoard.
//it means javascript is running in non-strict (sloppy mode).
lastName = "Schmedtmann";
console.log(lastName);
console.log(globalThis.lastName);
