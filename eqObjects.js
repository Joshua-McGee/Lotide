// const assertEqual = function (actual, expected) {
//   // if the first parameter is equal to the second
//   if (actual === expected) {
//     console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

//   } else { //otherwise
//     console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

//   }
//   return;
// }

// const eqArrays = function (arrayOne, arrayTwo) {

//   // set the condition for the array returning false 
//   // (make sure they are both arrays and the same length) if not return false
//   if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo) || arrayOne.length !== arrayTwo.length)
//     return false;

//   let arr1 = arrayOne
//   let arr2 = arrayTwo

//   // loop through the first array which we concated and sorted
//   for (let i = 0; i < arr1.length; i++) {
//     // if the index of the first array doesnt match the second
//     if (arr1[i] !== arr2[i])
//       return false;
//   }
//   // if non of the code above runs return true because it has to match
//   return true;
// }
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);

  if (keyOne.length === keyTwo.length) { // make sure they have the same lengths if they do proceed
    //console.log('key lengths are the same');
    for (let value of keyOne) { // loops through the keys of object 1 because we are calling kayOne var thats set to Object.keys(object1)
      //console.log('i looped through the keys');

      if (Array.isArray(object1[value])) { // only runs if the object key is an array
        if (eqArrays(object1[value], object2[value])) { // check if both objects are an array
          // do not return becasue that means the code passed
        } else {
          return false; // otherwise return false because that are both not arrays
        }
      } else if (object1[value] === object2[value]) { // move to this statement if the object is not an array and check each value against one another
        // do not return here becasue that means the code has passed
      } else {
        return false;// if not a match return false
      }
    }
  } else {
    return false; // if lengths are not the same returns false
  }
  return true; // only returns true if the code can make it through all the if statements.
};

module.exports = eqObjects;

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const obj1 = {
  c: "1",
  d: ["2", 3]
};

const obj2 = {
  d: ["2", 3],
  c: "1"
};

console.log(assertEqual(eqObjects(obj1, obj2), true)); // => true

const obj3 = {
  c: "1",
  d: ["2", 3, 4]
};
console.log(assertEqual(eqObjects(obj1, obj3), false)); // => false