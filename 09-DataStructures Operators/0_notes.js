// Destructuring of Arrays
'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log('a b c :', a, b, c);
const [x, y, z] = arr;
console.log('x y z :', x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables via temp third variable.
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//Switching variables via array destructuring.
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starterItem, mainItem] = restaurant.order(2, 0);
console.log(starterItem, mainItem);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
