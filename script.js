let destination = prompt("Which destination would you like to visit?");
let budget = prompt("What is your travel budget?");

budget = Number(budget);

if (budget >= 1500) {
    alert("You have a good budget for an international trip!");
} else {
    alert("You may want to choose one of our more affordable packages.");
}

console.log("Destination:", destination);
console.log("Budget:", budget);