const assert = require('assert');
const event = require('../src/js/index');

describe('validationObject', ()=> {
  describe('각 validation 여부를 확', ()=>{
    it('결과 => ', ()=> {
      const isValidPhoneNumber = validationObject.isValidPhoneNumber;

      expect(false).toBe(isValidPhoneNumber);
    })
  })
});