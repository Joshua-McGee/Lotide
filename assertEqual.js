const assertEqual = function(actual, expected) {
  // if the first parameter is equal to the second
  if (actual === expected) {
    console.log('👌👌👌👌', 'Assertion Passed:', actual, '===', expected)

  } else { //otherwise
    console.log('💩💩💩💩', 'Assertion Failed:', actual, '!==', expected)

  }
  return
}

//test code
assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1)
assertEqual('Bootcamp', 'Bootcamp')
assertEqual(1, 2)
