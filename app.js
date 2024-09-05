// Program to welcome based on city input
let city = prompt("Enter your city:");
if (city === "Karachi") {
  alert("Welcome to the city of lights");
}

// Program to greet based on gender input
let gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
}

// Program to show message based on traffic signal color
let signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):");
if (signalColor === "Red") {
  alert("Must Stop");
} else if (signalColor === "Yellow") {
  alert("Ready to move");
} else if (signalColor === "Green") {
  alert("Move now");
} else {
  alert("Invalid color");
}

// Program to check remaining fuel in the car
let remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("You have enough fuel");
}

// a. Condition for variable a
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b. Condition for variable b
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c. Multiple conditions for variable c
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// d. Checking total cost
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e. True/False condition check
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

// f. String comparison
if ("car" < "cat") {
  alert("car is smaller than cat");
}
