const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];
//map()→“Give me a new version of this list”.
//the return of map() will be newer version of list.
//Every map() must return somthing!.
//Inner map() returns a new array.
//Outer map() must return that inner array.
let x = content.map((values) => {
  return values.map((x) => {
    console.log(x);
    return "hola :" + x;
  });
});
console.log(x);
//forEach()→ “Do something with each item”.
//the return of forEach() will be undefined.
content.forEach((values) => {
  values.forEach((data) => {
    console.log(data);
  });
});
// Assignment 1
let country = "india";
let district = "kashmere";
let population = 10;
console.log(country);
console.log(district);
console.log(population);
console.log(population);
// Assignment 2
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
