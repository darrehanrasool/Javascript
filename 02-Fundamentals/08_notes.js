"use strict";
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
const interestedIn = "";
// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName,lastName,age,job and friends",
// );
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends",
  );
}
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
);
// Object Methods
const jonas_ = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },
  // calcAge: function () {
  // //this operator is reffrence to the current object.
  //   return 2037 - this.birthYeah;
  // }
  calcAge: function () {
    // console.log(this); whole javascript object itself
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${jonas_.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
//computed member access [], member access .
//creates a new property age inside the javascript object dynamically and stores the value there.
console.log(jonas_["calcAge"]());
console.log(jonas_.calcAge());
console.log(jonas_);
console.log(jonas_.getSummary());
console.log(jonas_.age);
console.log(jonas_.age);
console.log(jonas_.age);
