// Functions Accepting Callback Functions.
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Every Funtion have name property
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', upperFirstWord);

// JS uses callbacks funtions all the time
const domclick = function () {
  console.log(`${'🗯️'.repeat(10)}`);
};
document.body.addEventListener('click', domclick);
['Jonas', 'Martha', 'Adam'].forEach(domclick);
