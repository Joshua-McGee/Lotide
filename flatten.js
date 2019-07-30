// const assertEqual = function(actual, expected, message) {
//   // if the first parameter is equal to the second
//   if (eqArrays(actual, expected) === true) { // if the eqArrays function returns true print this otherwise else runs.
//     console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

//   } else { //otherwise
//     console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

//   }
// }
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
// pass the two arrays into the function
// const eqArrays = function(arrayOne, arrayTwo) { 

//   // set the condition for the array returning false 
//   // (make sure they are both arrays and the same length) if not return false
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   // loop through the first array which we concated and sorted
//   for (let i = 0; i < arrayOne.length; i++) {
//     // if the index of the first array doesnt match the second
//     if (arrayOne[i] !== arrayTwo[i])
//     return false;
//   }
//   // if non of the code above runs return true because it has to match
//   return true;
// }
// the first paramenter arr equals the nested array we are giving it 
// the result is set so it must be an array
const flatten = function(arr, result = []) {
  // loop through the original array
  for (let i = 0, length = arr.length; i < length; i++) {
    // set a variable value to be equal to the current index of the array
    const value = arr[i];
    //The Array.isArray() method determines whether the passed value is an Array and returns true
    // checks if value is an array
    if (Array.isArray(value)) {
      // run the flatten function if it is aka flatten the array so its no longer nested
      flatten(value, result);
    } else {
      // otherwise add the next index to our new array result.
      result.push(value);
    }
  }
  return result;
};

module.exports = flatten;
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

