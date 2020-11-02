const middle = require('../middle');
const assert = require('chai').assert;

describe("#tail", () => {
  it('should return empty array', () => {
    assert.deepEqual(middle([1]), []);
  })
  it('should return empty array', () => {
    assert.deepEqual(middle([1, 2]), []);
  })
  it('should return empty array', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
  it('should return empty array', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
  it('should return empty array', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })

})
