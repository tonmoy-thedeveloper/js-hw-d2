// Using age and hasID, use nested if-else to check whether someone is eligible to vote.

let age = 10;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You can vote.");
  } else {
    console.log("You have to come with your id");
  }
} else {
  console.log("You can't vote");
}
