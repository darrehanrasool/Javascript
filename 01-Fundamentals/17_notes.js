// map() Give me a new version of this array.
// the return of map() will be array.
// Every map() must return somthing.
// Inner map() returns a new array.
// Outer map() must return that inner array.
// forEach() Do something with each item.
// the return of forEach() will be undefined.
// this is used for side effects only.
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
];

let x = content.map((values) => {
  return values.map((x) => {
    return "hola :" + x;
  });
});
console.log(x);
content.forEach((values) => {
  values.forEach((data) => {
    console.log(data);
  });
});
