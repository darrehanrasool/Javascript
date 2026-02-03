//"use strict";
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
let firstName = "Matilda";
// reusablity of variables
console.log(firstName);
console.log(firstName);
console.log(firstName);
// Variable name conventions
let jonas_matilda = "JM";
let profileName = "Rehan";
let $function = 27;
let _rehan = "underscore";
let person = "jonas";
// use uppercase for universal global values
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);
// we have values and variables in javascript
// value is the smallest unit in programing lingo.
// a value can be either object and primitive
// if a value is not object then only its primitive.
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
