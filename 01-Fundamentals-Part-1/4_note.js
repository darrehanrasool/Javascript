// javascript is a dynamic typed programing language means we don't need to exeplicitly provide the type of data
// the interpreter will infer the type of data type at runtime when value is assigned to the variable
// Diffrence between the javascript object and primitive data type
//  What are primitives?
//  Primitives store actual values directly in memory space.
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
// 	•	obj1 and obj2 point's to the same memory space
// 	•	Changing one affects the other
//  Objects are passed by reference
//  objects are mutable
console.log("Symbol returns a new unique symbol value");
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
