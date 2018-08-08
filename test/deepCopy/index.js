var expect = require('chai').expect;
var deepFun = require('../../src/deepCopy')
describe('deepFun', () => {
  it('deepCopy', () => {
    var deepCopy = deepFun.deepCopy
    var test = {
      a: undefined,
      b: null,
      c: '',
      d: NaN,
      e: /\d/,
      f: function () {console.log('function')},
      g: true
    }
    test.h = test
    
    // test.i = [test, test, test]
    // console.log(test)

    var result = deepCopy(test)
    console.log(result)
    result.a = 1
    result.b = 2
    console.log(result)
  })
})