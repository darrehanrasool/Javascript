// Object References in Practice (Shallow vs. Deep Copies)
const jessica_ = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
const marriedJessica = marryPerson(jessica_, 'Davis');

// const marriedJessica = jessica_;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica_);
console.log('After:', marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};

// Shallow Copy via using spread operator same array Reffrence.
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';
jessicaCopy.familiy.push('Mary');
jessicaCopy.familiy.push('John');

console.log('Before:', jessica);
console.log('After:', jessicaCopy);

// Deep Copy/Clone via using structuredClone() Diffrent array Reffrence.
const jessicaClone = structuredClone(jessica);
jessicaClone.lastName = 'Rehan';
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
