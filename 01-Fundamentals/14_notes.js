// Symbol is a primitive data type that always creates a unique value
// Creating two symbols with same description
const uniqueId_1 = Symbol("userId");
const uniqueId_2 = Symbol("userId");
// Symbols are never equal even if description is same
console.log(uniqueId_1 === uniqueId_2); // false
// BigInt is used for very large integers
const largeNumber = 1262754n;
// Printing BigInt value
console.log(largeNumber); // 1262754n
// Checking type of BigInt
console.log(typeof largeNumber); // "bigint"
// JavaScript object with different types of keys
const user = {
  name: "Rehan", //normal string key
  "full name": "Dar Rehan Rasool", //key with space (bracket access needed)
  age: 100, //normal key
  [uniqueId_1]: 101, //symbol used as computed key
};
// Dot operator is used for fixed keys
console.log(user.name); //"Rehan"
console.log(user.age); //100
// Bracket operator is used for keys with spaces
console.log(user["full name"]); //"Dar Rehan Rasool"
// Symbol key must be accessed using same symbol reference
console.log(user[uniqueId_1]); // 101
// Variable holding a key name
const key = "age";
console.log(user["key"]); //Accessing literal key "key" (does not exist).
console.log(user[key]); //Accesses value inside variable key works fine .
console.log(user.key); //Dot access works only with fixed property names.
//Dot access cannot use variables.
//Dot access is case-sensitive.
