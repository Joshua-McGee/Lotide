// const assertEqual = function(actual, expected) {
//   // if the first parameter is equal to the second
//   if (actual === expected) {
//     console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

//   } else { //otherwise
//     console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

//   }
//   return
// }
const assertEqual = require('./assertEqual');
// create the function called head and call the paramater given array
const head = function(array) {
  return array[0]; // return the head (first element of array)
}


module.exports = head;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5]), "Hello");
// assertEqual(head([]), "Hello");