const assertEqual = function(actual, expected) {
  // if the first parameter is equal to the second
  if (actual === expected) {
    console.log(`👌👌👌👌 Assertion Passed: ${actual} === ${expected}`)

  } else { //otherwise
    console.log(`💩💩💩💩 Assertion Failed: ${actual} !== ${expected}`)

  }
  return
}

const countOnly = function(allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) {
      // if results the object is true
      if (results[item]) {
        results[item] += 1; // increase the count by 1
      } else {
        results[item] = 1; // set the counter to 1
      }
    }
  }
  return results;
}

// object by the name of firstNames
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// create a variable result1 and run it through countOnly
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);