// Funtion Returning Funtion
// Higher Order Funtion
const example = (first) => {
  return (second) => {
    console.log(`${first} it's nice to meet you ${second}`);
  };
};
example('Bonjur !')('Buddy !');
let value = example('Hola !');
value('Rehan');
value('Steve');
value('Bro');

// Funtion Returning Funtion
const greet = (message) => {
  return (guest) => {
    console.log(`${message} ${guest}`);
  };
};
greet('Asalamu Alay Kum')('guest a');
greet('Asalamu Alay Kum')('guest b');
greet('Asalamu Alay Kum')('guest c');
greet('Asalamu Alay Kum')('guest d');
