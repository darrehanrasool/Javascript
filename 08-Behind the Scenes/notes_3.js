// This Keywoard is Reffrence to the current object.
console.log(this); //window() object
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // For Regular funtion this keywoard is undefined.
  console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // For Arrow funtion this keywoard is window() object.
  // Arrow funtion did't have its own this keywoard.
  // Arrow funtion useses lexical this keywoard.
  console.log(this);
};
calcAgeArrow(1980);
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
