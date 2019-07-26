const assertArraysEqual = function(actual, expected, message) {
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
  if (arrayOne.length !== arrayTwo.length)
    return false;

    let arr1 = arrayOne
    let arr2 = arrayTwo 

    // loop through the first array which we concated and sorted
    for (let i = 0; i < arr1.length; i++) {
      // if the index of the first array doesnt match the second
      if (arr1[i] !== arr2[i])
      return false;
    }
    // if non of the code above runs return true because it has to match
    return true;
  }
// this function will return the slice of the array elements taken from the beginning it should
// keep going until the callback returns a truthy value

const takeUntil = function(array, callback) {
  //console.log(array, callback);
  let newArray = [];
  for (let num of array) { // loops the arrays (works)
    
    if (!callback(num)){ // if the current paramaeters index in the array are not equal to the callback
      console.log('im in the if statement');
       newArray.push(num); // add that index(item) to the newArray
    } else {
      return newArray;
    }
  }
  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; // an array called data1

// give takeUntil the array and loop through it until x is less than 0 then push a new array
const results1 = takeUntil(data1, x => x < 0);  // x < 0 is callback condition
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // x is equal to ',' is callback
console.log(results2);

assertArraysEqual(results1, data1);
/*
Expected Output

[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

