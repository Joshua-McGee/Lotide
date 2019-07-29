const eqArrays = require('./eqArrays'); 
// we are running this function in assertArraysEqual so we need to require it here

const assertArraysEqual = function(actual, expected, message) {
  // if the first parameter is equal to the second
  if (eqArrays(actual, expected) === true) { // if the eqArrays function returns true print this otherwise else runs.
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
}

module.exports = assertArraysEqual;
