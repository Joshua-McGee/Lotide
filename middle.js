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

// ACTUAL FUNCTION
const middle = function(array) {

  let arrayResult = [];

    if (array.length <= 2) { // if its less than or equal to 2 return empty array
      //console.log('im less than 2');
      return arrayResult;

    } else if (array.length %2 === 0) {
      // anything more than 2 slice the first & last index and return the new array
      arrayResult = [array[(array.length / 2 ) - 1], array[array.length / 2]]; // returns the 2 middle index's
      //console.log('Im odd and returned the middle indexs');
    } else {
      arrayResult = array[(array.length - 1) / 2]; // returns the third index - 1
      //console.log("i know this is even");
    }

  return arrayResult; 
}
  /*...The middle function should return an array with only 
  the middle element(s) of the provided array. This means that the 
  length of the returned elements could vary.*/

  // i need to read the array and slice both the first 
  //and last index if the length is greater than 2?

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]