'use strict';
// Maps    : keys can be of any type.
// Objects : keys can be only strings.
// returns the updated map().
const rest = new Map();
rest
  .set(1, 'Firenze, Italy')
  .set(2, 'Lisbon, Portugal')
  .set('name', 'Classico Italiano')
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get(1));
console.log(rest.get(2));
console.log(rest.get('name'));
console.log(rest.get('categories'));
console.log(rest.get('open'));
console.log(rest.get('close'));
console.log(rest.get(true));
console.log(rest.get(false));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

rest.delete(1);
rest.has('categories');
rest.size;
rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
