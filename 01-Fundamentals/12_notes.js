// Basics of leghth in python programing wenuse len()
let tweet = prompt("enter tweet");
tweet.length;
console.log(tweet.length);
let yourName = prompt("enter name");
let first = yourName.slice(0, 1);
let upper = first.toUpperCase();
let remains = yourName.slice(1).toLowerCase();
console.log(upper + remains);
let full = upper + remains;
// template literals
alert(
  `hello ${full}, you have ${tweet.length} characters in your tweet you have ${140 - tweet.length} characters left`,
);
// twiter handle
let yourTweet = prompt(
  "Hi there write you tweet you are allowed to fill 10 charecters!",
);
let value = yourTweet.slice(0, 10);
window.alert(value);
// shorthand code
alert(prompt("Enter your tweet Buddy ! :").slice(0, 50));
// Dog age to Humman Age converter 🫥
let dogAge = prompt("Enter the dog age:");
let hummanAge = (dogAge - 2) * 4 + 21;
alert(`buddy you dogs humman age is ${hummanAge} years old `);
