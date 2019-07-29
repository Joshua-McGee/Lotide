// pass the two arrays into the function
const eqArrays = function(arrayOne, arrayTwo) { 

  // set the condition for the array returning false 
  // (make sure they are both arrays and the same length) if not return false
  if (!Array.isArray(arrayOne) || ! Array.isArray(arrayTwo) || arrayOne.length !== arrayTwo.length)
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

module.exports = eqArrays;