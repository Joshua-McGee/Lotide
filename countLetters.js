const assertEqual = function (actual, expected) {
  // if the first parameter is equal to the second
  if (actual === expected) {
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
  return;
}

const countLetters = function(string) {
  let obj = {};

  // split the space character (' ') then join with no space ('')
  string = string.split(" ").join(''); 

  // this uses an empty box by the name of "letter" and takes the value of string (in this case)
  // its "lighthouse in the house" and plops each index of the string into letter one by one
  // eg: 'l' is temporarily in the box(letter) then 'i' and so on until the string is done.
  for (let letter of string) { 

    // we are adding keys to our obj which was empty and setting their values to 0
    obj[letter] = 0; // default keys set to 0
  }
  // we want to loop through the string again
  for (let letter of string) {
    obj[letter] += 1; // we now want to update our value from 0 to 1 and 1 to 2 etc...
  }
  return obj;
}

console.log(countLetters("lighthouse in the house"));
// runs my assertEqual function to check if the number of h's is equal to 4
// .h is using dot notation to find the parent of h in countLetters aka how many times it appears.
console.log(assertEqual(countLetters("lighthouse in the house").h, 4)); 



