const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

const assert = require('chai').assert;

describe('#middle', () => {
  it('returns [6] for [5, 6, 7]', () => {
    assert.deepEqual(middle([5, 6, 7]), [6]);
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]