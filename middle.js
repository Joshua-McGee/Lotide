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
      arrayResult.push(array[(array.length - 1) / 2]); // returns the third index - 1
      //console.log("i know this is even");
    }

  return arrayResult; 
}
module.exports = middle;