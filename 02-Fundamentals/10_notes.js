"use strict";
// Iteration: Looping
console.log("Lifting weights repetition 1 🏋️‍♀️");
console.log("Lifting weights repetition 2 🏋️‍♀️");
console.log("Lifting weights repetition 3 🏋️‍♀️");
console.log("Lifting weights repetition 4 🏋️‍♀️");
console.log("Lifting weights repetition 5 🏋️‍♀️");
console.log("Lifting weights repetition 6 🏋️‍♀️");
console.log("Lifting weights repetition 7 🏋️‍♀️");
console.log("Lifting weights repetition 8 🏋️‍♀️");
console.log("Lifting weights repetition 9 🏋️‍♀️");
console.log("Lifting weights repetition 10 🏋️‍♀️");
// initialisation,condition,updation.
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
// Looping Arrays, Breaking and Continuing
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];
console.log(jonas[0], typeof jonas[0]); //sting
console.log(jonas[1], typeof jonas[1]); //string
console.log(jonas[2], typeof jonas[2]); //number
console.log(jonas[3], typeof jonas[3]); //string
console.log(jonas[4], typeof jonas[4]); //object
console.log(jonas[5], typeof jonas[5]); //bolean
//jonas[6] does NOT exist
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
