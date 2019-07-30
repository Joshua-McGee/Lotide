# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @josh.mcgee/Lotide`

**Require it:**

`const _ = require('@josh.mcgee/Lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: compares 2 arrays and checks if they are the same
* `asserEqual(...)`: compares 2 parameters and checks if they are the exact same
* `assertObjectsEqual(...)`: checks if 2 objects are the same and returns true or false
* `countLetters(...)`: counts how many letters are in a string
* `countOnly(...)`: counts a specific parameter
* `eqArrays(...)`: checks if 2 arrays are the same
* `eqObjects(...)`: checks if 2 objects have identical keys with identical values
* `findKeys(...)`: scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: it should scan the object and return the first key which contains the given value. 
  If no key with that given value is found, then it should return undefined.
* `flatten(...)`: takes multipul arrays and flattens them into a single array
* `head(...)`: returns the first index of a parameter
* `letterPositions(...)`: returns what index a letter is at when given a string
* `map(...)`: returns a new array with your given parameter
* `middle(...)`: returns the middle parameter of an array 
* `tail(...)`: returns the tail of an array
* `takeUntil(...)`: give takeUntil the array and loop through it until x is less than 0 then push a new array
* `without(...)`: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.