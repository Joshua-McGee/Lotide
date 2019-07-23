const assertEqual = function(actual, expected) {
  // if the first parameter is equal to the second
  if (actual === expected) {
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
  return
}

const tail = function(array) {
  if (array.length <= 1) { // if its less than or equal to 1 empty the array
    return [];
  } else if (array.length === 2) { // if its exactly 2 return the array as is
    return array;
  } else { // anything more than 2 slice the head and return the new array
    array = array.slice(1); 
    return array;
  }
}

const result = tail(['Hello', 'Lighthouse', 'Labs']);


assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
assertEqual(result[1], 'Labs'); // ensure second element is "Labs"

// Test Case: Check the original array 
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
