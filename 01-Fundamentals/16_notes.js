// Truthy and Falsy Values in javascript programing language.
// Everthing is truthy except 5 falsy values: 0,'',undefined,null,false,NAN.
// NaN is a falsey value of type number.
//'' is a falsy value.
//'' is not nullish.
//{} is not nullish.
//{} is not falsey value.
//eg null ?? default.
console.log(Boolean(0)); //falsey value ie false
console.log(Boolean(undefined)); //falsey value ie false
console.log(Boolean(null)); //falsy value ie false
console.log(Boolean(NaN)); //faslsy value ie false
console.log(Boolean(false)); //falsy value ie false
console.log(Boolean("Jonas")); //truthy value ie true
console.log(Boolean({})); //truthy value ie true
console.log(Boolean("")); //fasly value ie false
const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}
//it might be teadious sometime to get it, check it 0 itself is falsy value, but height is defined.
let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
let language = "kashmere";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "kashmere":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too 🗯️ ");
}
