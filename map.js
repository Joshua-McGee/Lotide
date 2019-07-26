const assertEqual = function(actual, expected, message) {
  // if the first parameter is equal to the second
  if (eqArrays(actual, expected) === true) { // if the eqArrays function returns true print this otherwise else runs.
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
}

// pass the two arrays into the function
const eqArrays = function(arrayOne, arrayTwo) { 

  // set the condition for the array returning false 
  // (make sure they are both arrays and the same length) if not return false
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  // loop through the first array which we concated and sorted
  for (let i = 0; i < arrayOne.length; i++) {
    // if the index of the first array doesnt match the second
    if (arrayOne[i] !== arrayTwo[i])
    return false;
  }
  // if non of the code above runs return true because it has to match
  return true;
}
/* 
our map function is going to need to take two arguments an array to map Array.map()
it also will need a callback function to return the argument you want mapped
*/

const words = ["ground", "control", "to", "major", "tom"]; // an array of words
const words2 = ['super', 'very', 'major', 'military'];

const map = function(array, callback) { // create a function called map that takes 2 parameters

  const results = []; // create an empty array
  for (let item of array) { // loop through the first parameter which is in this case array
    results.push(callback(item)); // push the
  }
  return results;
}

// this is a function that takes 2 arguments
// words is the array, word an empty parameter and the function is returniong the empty parameters first index.
const results1 = map(words, word => word[0]); 
const results2 = map(words2, word => word[0]);

console.log(results1);
console.log(results2);

assertEqual(results1, results1); // should return true
assertEqual(results1, results2); // should return false
assertEqual(results2, results2);