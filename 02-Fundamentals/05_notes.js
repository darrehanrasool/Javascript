"use strict";
// Create an array of friends
// Type: string[]
const friends = ["Michael", "Steven", "Peter"];
console.log("Initial Array:", friends);
// 1️⃣ push() → Adds element at the END
// Return Type: number (new length of array)
const newLength = friends.push("Jay");
console.log("After push:", friends);
console.log("Return value of push (new length):", newLength);
// 2️⃣ unshift() → Adds element at the BEGINNING
// Return Type: number (new length of array)
const newLengthAfterUnshift = friends.unshift("John");
console.log("After unshift:", friends);
console.log("Return value of unshift (new length):", newLengthAfterUnshift);
// 3️⃣ pop() → Removes LAST element
// Return Type: removed element (string in this case)
friends.pop(); // removes last element but not stored
const popped = friends.pop(); // removes and stores last element
console.log("Removed element using pop:", popped);
console.log("Array after pop:", friends);
// 4️⃣ shift() → Removes FIRST element
// Return Type: removed element (string in this case)
const shifted = friends.shift();
console.log("Removed element using shift:", shifted);
console.log("Array after shift:", friends);
// 5️⃣ indexOf() → Returns index of element
// Return Type: number
// If element not found → returns -1
console.log("Index of Steven:", friends.indexOf("Steven"));
console.log("Index of Bob (not present):", friends.indexOf("Bob"));
// 6️⃣ includes() → Checks if element exists
// Return Type: boolean (true or false)
friends.push(23); // adding a number to show type checking
console.log("Includes Steven:", friends.includes("Steven")); // true
console.log("Includes Bob:", friends.includes("Bob")); // false
console.log("Includes 23:", friends.includes(23)); // true
// Youstrict equality
console.log("Includes 23:", friends.includes("23")); // false
// Using includes() in condition
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
