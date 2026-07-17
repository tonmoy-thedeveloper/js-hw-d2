// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

let bmi = 34;
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else if (bmi >= 25.0 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
