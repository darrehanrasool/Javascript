// The bind Method
// Object 1
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
// Object 2
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
// Object 3
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
const book = lufthansa.book;

// simply returns a funtion in which this keywoard is pointing towards passed object.
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);

bookLH(23, 'Steven Williams');
bookEW(24, 'Steven Williams');
bookLX(25, 'Steven Williams');

const bookEW24 = book.bind(eurowings, 24);
bookEW24('Jonas Schmedtmann');
bookEW24('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

// in case of event listner this keywoard points towards the  dom element with whome event listner is attached.
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const same = (value) => value + value * 0.23;
// fix rate to 23 % always
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// First class funtion
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
