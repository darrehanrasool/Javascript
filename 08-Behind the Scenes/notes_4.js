// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    // For Regular Funtion this keywoard is undefined.                                 .
    const self = this;
    const isMillenial_ = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial_();
    // Solution 2
    // For Arrow funtion this keywoard is window() object.
    // Arrow funtion did't have its own this keywoard.
    // Arrow funtion useses lexical this keywoard.
    // Here the scope is funtion()
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  // Here the scope becomes global().
  // Javascript object is not a scope.
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword in javascript
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
