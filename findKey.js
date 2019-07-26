const assertEqual = function (actual, expected) {
  // if the first parameter is equal to the second
  if (actual === expected) {
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
  return
}

/*
Implement the function findKey which takes in an object and a callback. 
It should scan the object and return the first key for which the callback returns a truthy value. 
If no key is found, then it should return undefined.
*/



const findKey = function (object, callback) {
  const genKeys = Object.keys(object); // grab the keys
  let i = 0; // set the index to the first element
  result = undefined;
  for (let movie of genKeys) { // loop through the objects keys
    //console.log('working', genKeys);

    /* in order to find the callback we need to look in the object and then open the key[movie] of each object.
       To access an objects key we need to use.key or [key], think of the key as a named index. we use the [0] 
       to access an arrays index at 1 and we use [keyname here] to access a value in the key object. */
    if (callback(object[movie])) { // if the current paramaeters index in the array are equal to the callback
      return movie; // return the movie
    } else {
      i++ // continue the loop
    }
  }
  return result;
};

const found = findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2) // => "noma"

console.log(found);
assertEqual(found, 'noma');