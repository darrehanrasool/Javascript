// Normal Funtion Call ie funtion declaration
const runOnce = function () {
  console.log('we can run it again  1');
};
runOnce();

// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log('This will never run again 2');
  const isPrivate_1 = 23;
})();
//console.log(isPrivate_1); // not defined

// Immediately Invoked Function Expressions (IIFE)
(() => {
  console.log('This will  never run again 3');
  const isPrivate_2 = 23;
})();
//console.log(isPrivate_2); // not defined

// block of code
{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate); // not defined

console.log(notPrivate); // 46
