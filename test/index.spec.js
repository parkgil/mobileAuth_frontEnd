const assert = require('assert');

describe('test function', () => {
  describe('test add', () => {
    it('더했을 때의 값을 확인함', () => {
      assert.equal(5, func(2, 3));
    })
  })
});