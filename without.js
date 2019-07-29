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

  /*This function should take in a source array and a itemsToRemove array. It should return a new array
   with only those elements from source that are not present in the itemsToRemove array.*/

const without = function(sourceArr, itemsToRemove) {
    
  // loop through the itemsToRemove array
  //for (let i = 0; i < itemsToRemove.length; i++) {
  // can do with filter() & look at sets()
    for(let num of itemsToRemove) { // for of loop looks at the number its given (not index of number)
    // if the source array items include items to remove run this code
    if (sourceArr.includes(itemsToRemove[num])){
      sourceArr.splice(num, 1);
    }
    //while the index of the sourceArr is the same as index of itemsToRemove and they do not equal -1
    // while ((index = sourceArr.indexOf(itemsToRemove[i])) !== -1 ) {
    //   // remove the index of the array and start at the next
    //   sourceArr.splice(index, 1);
    // }
  }
  return sourceArr; // return the new array.
}


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(words, ["hello", "world", "lighthouse"]);
