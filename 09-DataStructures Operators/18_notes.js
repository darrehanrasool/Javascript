// Working With Strings - Part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails are equal or not
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// via trim() we can remove space and escaping charecters.
const start = loginEmail.trimStart();
const end = loginEmail.trimEnd();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come To boarding door 23. Boarding door 23!';
// first accurance
console.log(announcement.replace('door', 'gate'));
// every accurance
console.log(announcement.replaceAll('door', 'gate'));
// Alternative solution to replaceAll with regular expression
console.log(announcement.replace(/door/g, 'gate'));
// Return Type Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('hello'));
console.log(plane.startsWith('Airb'));
console.log(plane.endsWith('neo'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}
// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
