"use strict";
// Introduction to Objects
// Data structure.
// Keeping Related data together
// Order does't matter
// Dot vs Bracket Notation
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonasArray);
console.log(jonasObject);
console.log(jonasObject.firstName);
console.log(jonasObject["firstName"]);
const nameKey = "Name";
console.log(jonasObject["first" + nameKey]);
console.log(jonasObject["last" + nameKey]);
//console.log(jonas.'last' + nameKey) Error
//prompt is inbuilt funtion in javascript that is used to take the input from the user return type string.
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends",
);
//this will result in undefined,because we are accessing the computed property which did't exit yet.
if (jonas.interestedIn) {
  console.log(jonas.interestedIn);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends",
  );
}
