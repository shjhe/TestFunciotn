var expect = require('chai').expect;
var algorithm = require('../src/algorithm')
var utils = require('../src/utils')
describe('algorithm', () => {
  // mocha -g bubbleSort
  it('bubbleSort', () => {
    var bubbleSort = algorithm.bubbleSort
    var testArr = utils.RandomArray(30, 100)
    var result = bubbleSort(testArr)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(result.sort((a, b) => a - b)))
    
  })
  // 快速排序
  it('quick', () => {
    var quick = algorithm.quick
    // 测试1000次
    for (var i = 0; i < 1000; i++) {
      var testArr = utils.RandomArray(30, 100)
      var result = quick(Object.assign([], testArr))
      expect(JSON.stringify(result)).to.equal(JSON.stringify(testArr.sort((a, b) => a - b)))
    }
  })
  // 插入排序
  it('pushSort', () => {
    var pushSort = algorithm.pushSort
    // 测试1000次
    for (var i = 0; i < 1000; i++) {
      var testArr = utils.RandomArray(20, 100)
      var result = pushSort(Object.assign([], testArr))
      expect(JSON.stringify(result)).to.equal(JSON.stringify(testArr.sort((a, b) => a - b)))
    }
  })
})