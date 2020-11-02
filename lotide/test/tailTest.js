const tail = require('../tail');
const assert = require('chai').assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it('should return 2', () => {
    assert.deepEqual(tail(words), 2);
  })

})
