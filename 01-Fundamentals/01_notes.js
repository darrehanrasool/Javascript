//"use strict";
//Here we are able to define variable without built in keywoards .
//which means javascript is running in non-strict sloppy mode.
let population = 10;
language = "portuguese";
const country = "Portugal";
const continent = "Europe";
let isIsland = false;
isIsland = true;
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
// String concatination
const description_1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description_1);
// Template literals or interpolation
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`,
  );
}
