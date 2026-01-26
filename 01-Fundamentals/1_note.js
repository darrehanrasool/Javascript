/** 
command + F for quick replacement of words names for testing
command + option + j chrome developer tools
command + B for vscode full screen
let const var are  keywoards for creating variables in javascript
keywords  is used only once. once the variable is created we can simply use variable name
in javascript we === for Equality ie it will check the content as well as data type strict Equality
in javascript we == for Equality ie it will check the content only lose
 Equality
prompt() is a funtion in javascript that is used to take the input from the user
let x = prompt("moye moye"); 
script dummy eg 
unhide h1 element
1s delay
unhide p element
h1 changes text to "hello"
p chagnes text to "world"
holding next line in chrome developer tools console shift + return
chrome developer tools , source , >> , snipets , index.js 
for clearing chrome developer tool console Hit the command + k
stylistic quote will result in error in javascript
For Hardcore Refresh of web page controle right click on refresh bar then chose Hard core Refresh
**/
let population = 10;
language = "portuguese";
const country = "Portugal";
const continent = "Europe";
const isIsland = false;
isIsland = true;
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);
// Template literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`,
  );
}
