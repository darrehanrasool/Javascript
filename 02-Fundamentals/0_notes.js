// BMI Calculator
function bmiCalculator(weight, height) {
  return Math.round(weight / Math.pow(height, 2));
  return Math.floor(weight / height ** 2);
}
let bmi = bmiCalculator(65, 1.8);
console.log(bmi);
