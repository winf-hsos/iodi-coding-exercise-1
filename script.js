/* global tf, log, clearLog, getInput, initDevices, getDeviceById, getDeviceByIdentifier, getValue */

/* This file is where you place all your Javascript code.
 * The program is executed line by line when you refresh the website. */

/********************** PART 1 ******************************/

/* The function clearLog() deletes everything in the textarea */
clearLog();

/* The function log() writes something to the textarea on our website */
log("Welcome to our first program");

// Exercise 1
function countToNumber() {
  /* The function getInput reads the value from a text field */
  var number = getInput("myInput");

  if (number > 0) {
    for (var c = 1; c <= number; c++) {
      log(c);
    }
  } else {
    log("Please enter a positive number!");
  }
}

// Exercise 2
function squareNumber() {
  // Implement the square function
  var number = getInput("myInput");
  var power = Math.pow(number, 2);
  log("The number " + number + " squared is " + power);
}

// Exercise 3
function calculateCircleProperties() {
  var radius = getInput("myInput");
  var pi = Math.PI;

  if (radius > 0) {
    var area = pi * radius * radius;
    log("The area of a circle with radius " + radius + " is " + area);
  } else {
    log("Error: Radius must be positive!");
  }
}

// Exercise 4
function calculatePower() {
  var base = getInput("myInput");
  var exponent = getInput("exponent");
  var result = Math.pow(base, exponent);
  log(result);
}

// Exercise 5
function setHeading() {
  var newHeadingValue = getInput("myInput");
  var heading = document.querySelector("h1");
  heading.innerHTML = newHeadingValue;
}