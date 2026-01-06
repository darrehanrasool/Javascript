// javascript is a language that powers the web. developed by brendan eich in 10 days .it was first called live script
// different version of javascript ,europian standise the language they created ECMA script europian computer manifacture
// association.script is a peice of code that tell the html element how to behave.
// javascript is a highlevel ,object oriented, multi paradigm prgraming language
// High Level : Actually we don't have to worry about complex memory management system like microprocessor
// Object oriented : its based on objects
// Multi paradigm : we can use different style of programing ie monolithic,imparative,declarative programing style
// HTML for Markup layout of website <p></p> Noun
// CSS for styling the website p{color:red}  Adjective
// Javascript for funtionality p.hide().     Verbs
// javascript allows us to add dynamic effects to the websites ie spinner of twiter
// we can run javascript outside the web Browser ie on web server via Node.js
// Node.js allows us to write backend applications
// We can use javascript to build native mobile applications as well as native desktop applications
// Native Mobile Applications ie via Reactnative ionic and Native desktop applications Via javascript electron
// Javascript Releases ES5,ES6,ES7,ES8,ES9,ES10,ES11.son on,WE USE ECMA SCRIPT 6 MODULE SYNTAX IE Modern Javascript
// command + F for quick replacement of words names for testing
// command + option + j for javascript developer console
// command + B for vscode
// alert() or window.alert() is a funtion in javascript that is used for dispalying pop ups
// console.log is not meant for user its meant for developer to debug the code.
// let const var are  keywoards for creating variables in javascript
// let is used only once. once the variable is created we can simply use variable name
// in javascript we === for Equality
// prompt() is a funtion in javascript that is used to take the input from the user
window.alert("Dar Rehan Rasool");
alert("Dar Rehan Rasool");
console.log("it will log the string to the output console");
let variable = 45;
const dob = 2000;
var demo = "Rehan";
if (variable === 45) alert("hi buddy");
profile_name = prompt("Enter the name buddy \n");
// Symbol returns a new unique symbol value
const uniqueId = Symbol("userId");
const user = {
  name: "Rehan",
  [uniqueId]: 101,
};
console.log(user.name); // Rehan
console.log(user[uniqueId]); // 101
console.log(Symbol("id") === Symbol("id")); // false

const largeNumber = 12627546721534n;
console.log(largeNumber); // 12627546721534n
console.log(typeof largeNumber); // bigint
// javascript is a dynamic typed programing language means we don't need to exeplicitly provide the type of data or value
// the interpreter will infer the type of data type at runtime when value is assigned to the variable
//  Diffrence between the javascript object and primitive data type
//  What are primitives?
// Primitives store actual values directly in memory space.
//  Primitive types in JavaScript:
// 	•	number
// 	•	string
// 	•	boolean
// 	•	undefined
// 	•	null
// 	•	symbol
// 	•	bigint
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
//  What happened?
// 	•	a stores 10
// 	•	b gets a copy of 10
// 	•	Changing b does NOT affect a
// Primitives are passed by value
// primitives are immutable
// Primitive in Function
function changeValue(x) {
  x = 50;
}
let num = 10;
changeValue(num);
console.log(num); // 10
// Original value unchanged immutable
// objects in Funtion
function changeName(user) {
  user.name = "Zoya";
}

let person = { name: "Rehan" };
changeName(person);
// original value changed mutable
console.log(person.name); // Zoya
// What are objects?
// Objects store memory references, not actual values.
// Object types:
// 	•	Object { }   javascript variable object
// 	•	Array [ ]    array object
// 	•	Function function() {} funtion object
// 	•	Date, Map, Set, etc. utilities object
let obj1 = { name: "Rehan" };
let obj2 = obj1;
obj2.name = "Ali";
console.log(obj1.name); // Ali
console.log(obj2.name); // Ali
//  What happened?
// 	•	obj1 and obj2 point to the same memory space
// 	•	Changing one affects the other
//  Objects are passed by reference
//  objects are mutable
