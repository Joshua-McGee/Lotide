// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const map = require('./map');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  flatten: flatten,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  map: map,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  takeUntil: takeUntil,
  without: without
};