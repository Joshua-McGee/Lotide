const head = require('../head');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); DONE
// assertEqual(head([5]), "Hello"); DONE
// assertEqual(head([]), "Hello");

describe('#head', () => {
  it('returns 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  // Un comment if you want an example of a failure
  // it("returns 'Hello' for ['5']", () => {
  //   assert.strictEqual(head(['5']), 'Hello');
  // });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  // Un comment if you want an example of a failure
  // it("returns 'Hello' for []", () => { 
  //   assert.strictEqual(head([]), 'Hello');
  // })
});