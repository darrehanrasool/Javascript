// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 
GOOD LUCK 
*/
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}
// Type Conversion or Type casting and  Type Coercion
// type conversion or type casting explicit conversion of data type

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
// NaN not a number type of NaN is a falsy value of type number
console.log(typeof NaN); //number
console.log(String(23), 23);

// type coercion implicit conversion of data type
// in case of + it trigers number to stings
// in case of - it trigers string's to number
// in case of / it trigers string's to number
// in case of * it trigers string's to number
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2"); //46
console.log("23" / "2"); //11.5
let n = "1" + 1; // '11'
n = n - 1; //10
console.log(n); //10

// Truthy and Falsy Values
//Everthing is truthy except 5 falsy values : 0, '', undefined, null,false, NaN is a falsy value of type number
console.log(Boolean(0)); //falsey value ie false
console.log(Boolean(undefined)); //falsey value ie false
console.log(Boolean(null)); //falsy value ie false
console.log(Boolean(NaN)); //faslsy value ie false
console.log(Boolean(false)); //falsy value ie false
console.log(Boolean("Jonas")); //truthy value ie true
console.log(Boolean({})); //truthy value ie true ‼️
console.log(Boolean("")); //fasly value ie false

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}
// 🤔 it might be teadous sometime to get it , check it 0 itself is falsy value but height is defined
let height = 0; //defined
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
