const assertEqual = function (actual, expected) {
  // if the first parameter is equal to the second
  if (actual === expected) {
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
  return;
}

const findKeyByValue = function (object, value) {
  const genKeys = Object.keys(object);
  /* it should scan the object and return the first key which contains the given value. 
  If no key with that given value is found, then it should return undefined. */
  let i = 0; // set index to 0
  result = undefined; // result is initally undefined
  for (let tvShow of genKeys) { // scanning the object bestTVShowsByGenre
    // if the objects (bestTVShowsByGenre) current index is the same as the value we passed
    if (object[genKeys[i]] === value) {
      //console.log('im in the loop i found a match');
      result = tvShow; // make the result equal to whatever is in tvShow box
    } else {
      i++; // run again
    }
  }
  return result;
};
module.exports = findKeyByValue;

// The Object.keys() method returns an array of a given object's own property names, 
// in the same order as we get with a normal loop.

// create an object and assign its keys the following
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

/*for (let tvShow of Object.keys(bestTVShowsByGenre)) { // scanning the object
  let bestShow = bestTVShowsByGenre[tvShow];
  console.log(tvShow, bestShow);
}; */

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));