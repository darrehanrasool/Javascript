// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Dar Rehan Rasool');

const book = lufthansa.book;
// for regular funtion this keywoard is undefined
// book(23, 'Sarah Williams');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// Call method
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// Call method
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
console.log(swiss);
