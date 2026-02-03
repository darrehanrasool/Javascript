// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 
*/
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const massRehan = 1000;
const heightRehan = 400;
const BMIRehan = massRehan / Math.pow(heightRehan, 2);
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
// Strings and Template Literals in javascript programing language
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
//type  Coercion javascript will implicitly convert number into string so that it will get concatinated.
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
// via template literals, back tick `
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);
// multiline via regular string by using escape sequence \n\
console.log(
  "String with \n\
multiple \n\
lines",
);
// multiline via template literals
console.log(`String
multiple
lines`);
// Taking Decisions: if / else Statements
const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
birthYear_1 = 2012;
let century;
if (birthYear_1 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
