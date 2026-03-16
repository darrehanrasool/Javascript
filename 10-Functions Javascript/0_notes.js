'use strict';
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum = 'LH123',
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // ES5 module syntax  for default parameters
  // flightNum =  flighthNum || 'LH123',
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  // ES6 module syntax for object literals
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000);
// it allows second parameter to take default value by using undefined
