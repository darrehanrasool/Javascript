// expression will result in output automatically.
3 + 4;
1991;
true && false && !false;
// statement will not result in output automatically.
if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
// The Conditional (Ternary) Operator :
// condition ? statement-1 : statement-2;
const age = 23;
// age > = 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);
let drink_2;
if (age >= 18) {
  drink_2 = "wine 🍷";
} else {
  drink_2 = "water 💧";
}
console.log(drink_2);
console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);
// Coding Challenge #4
/*
 Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant.
 In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value 
 is different, the tip is 20%.Your task is to caluclate the tip, depending on the bill value.
 Create a variable called 'tip' for this.It's not allowed to use an if/else statement (If it's 
 easier for you, you can start with an if/else statement,and then try to convert it to a ternary
operator!)Print a string to the console containing the bill value, the tip, and the final value
 (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 
GOOD LUCK 
*/
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
);
let population = 35;
let country = "india";
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`,
);
