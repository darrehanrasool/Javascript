//Looping through object
const weekdays = ['sun', 'mon', 'tue', 'wen', 'thur', 'fri', 'sat'];
openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0,
    close: 24,
  },
};

// keys
const keys = Object.keys(openingHours);
console.log(keys);
let str_1 = `keys :`;
for (key of keys) {
  str_1 += ` ${key}`;
}
console.log(str_1);

// values
const values = Object.values(openingHours);
console.log(values);
let str_2 = `values :`;
for ({ open, close } of values) {
  str_2 += `${open}:${close} ,`;
}
console.log(str_2);

// enteries
const entries = Object.entries(openingHours);
console.log(entries);
let str_3;
for ([day, { open, close }] of entries) {
  str_3 = ` on ${day} we open at ${open} and we close at ${close}`;
  console.log(str_3);
}
