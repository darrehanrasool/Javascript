'use strict';
// Closures
// There exists separate  execution  context for  each funtion.
// Once the funtion finished execution its poped out from stack.
// But its variable Enviroment is still reachable via closures.
// A closure is not a tangible javascript variable object.
// it's implicitly created by the javascript.
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
console.log(booker);
console.warn(booker);
console.table(booker);
