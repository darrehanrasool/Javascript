// we can omit curly braces if,if statement is having only one single line to execute.
// Equality Operators: lose equality == vs strict equality ===.
// it will check for the content as well as data type, both must be same strict Equality no type coercion.
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
// it will check for the content only, content must be same Lose Equality type coercion.
if (age == 18) console.log("You just became an adult :D (loose)");
// prompt() is  a inbuilt funtion in javascript that is used to take the input from user, return type : string.
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
// not equal to stict one
if (favourite !== 23) console.log("Why not 23?");
// not equal to lose one
if (favourite != 23) console.log("Why not 23?");
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
