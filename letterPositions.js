const assertEqual = function (actual, expected) {
  // if the first parameter is equal to the second
  if (actual === expected) {
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
  return;
}
// how to do the letterPositions function with a for of loop

/*
const letterPositions = function(sentence) {
  const results = {}; // make empty object
  sentence = sentence.split(" ").join(''); // take away spaces in sentence
  let index = 0;
  for (let letter of sentence) {
    //console.log(index, letter);
    if (!results[letter]) {
      results[letter] = [index];
    } else {
      results[letter].push(index);
    }
    index++
  }
  return results;
};
*/

const letterPositions = function(sentence) {
  const results = {}; // make empty object
  sentence = sentence.split(" ").join(''); // take away spaces in sentence
  
  for (let i=0; i < sentence.length; i++) {
    let letter = sentence.charAt(i);
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("lighthouse in the house"));
// console.log(assertEqual(letterPositions("lighthouse in the house").h, [4]));