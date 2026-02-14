//  Diffrence between the javascript object and primitive data type.
//  What are primitives?
//  Primitives store actual values directly in memory space.
//  Primitives are passed by values.
//  Primitive are immutable.
//  As the name it self suggests Value it self can't change.
//  Primitive data types in JavaScript:
// 1)number    data type ie let x=2; let b=7.8;
// 2)string    data type ie "rehan"
// 3)bolean    data type ie true, false
// 4)undefined data type ie let address;
// 5)null      data type ie let address=null;
// 6)bigInt    data type ie let salary=123456n;
// 8)symbol    data type ie const id =Symbol("id"); unique value
//  Primitive in Function
function changeValue(x) {
  x = 50;
}
let num = 10;
changeValue(num);
console.log(num);
//  10 Original value unchanged immutable
//  What are objects?
//  Objects store memory references,not actual values in the memory space.
//  Objects are passed by reference
//  objects are mutable
//  As the name it self suggests value it self can change.
//  Object types:
// 	•	Object: { }   javascript variable object
// 	•	Array: [ ]    array object
// 	•	Function: function() {} funtion object
// 	•	Built in utilities objects: Date,Time,Set,Map,Intl etc.
let obj_1 = { name: "Rehan" };
let obj_2 = obj_1;
obj_2.name = "Ali";
console.log(obj_1.name); // Ali
console.log(obj_2.name); // Ali
