"use strict";
//Introduction to Arrays.
//Array can be defined as group of disimillar type of data elements.
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
//via using Literal syntax.
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
//Via using Built in funtion.
const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
// Acessing last element
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);
// Friends = ['Bob', 'Alice'] Error
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);
// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];
// Type coercion it will convert it into string
let test = years + 10;
console.log(test);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
