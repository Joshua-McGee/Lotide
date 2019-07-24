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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
