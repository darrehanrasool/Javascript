// javascript is a dynamic typed programing language means we don't need to exeplicitly provide the type of data
// the interpreter will infer the type of data type at runtime when value is assigned to the variable
// Diffrence between the javascript object and primitive data type
//  What are primitives?
//  Primitives store actual values directly in memory space.
//  Primitive data types in JavaScript:
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

// What are objects?
// Objects store memory references, not actual values.
// Object types:
// 	•	Object { }   javascript variable object
// 	•	Array [ ]    array object
// 	•	Function function() {} funtion object
// 	•	Date,Map,Set,Intl,Time etc. utilities object

let obj1 = { name: "Rehan" };
let obj2 = obj1;
obj2.name = "Ali";
console.log(obj1.name); // Ali
console.log(obj2.name); // Ali
//  What happened?
// 	•	obj1 and obj2 point's to the same memory space location
// 	•	Changing one affects the other
//  Objects are passed by reference
//  objects are mutable

// symbol primitive data type
console.log("Symbol returns a new unique symbol value");
const uniqueId1 = Symbol("userId");
const uniqueId2 = Symbol("userId");
console.log(uniqueId1 === uniqueId2); //False both are unique
const user = {
  name: "Rehan",
  [uniqueId1]: 101,
};

// both . and [] are member access operators in JavaScript
console.log(user.name); // Rehan
console.log(user[uniqueId1]); // 101
const largeNumber = 12627546721534n;
console.log(largeNumber); // 12627546721534n
console.log(typeof largeNumber); // bigint
// user1
const user1 = {
  "full name": "Rehan Rasool",
  age: 22,
};
console.log(user1.age); // 22
// the [] memeber access operator works when there is no sepacial symbol or underscore in varialble name .
// that's the reason kept in "full name" we can write space here works fine
console.log(user1["full name"]);
const key = "age"; // Dynamic key store
console.log(user1[key]); // 22
