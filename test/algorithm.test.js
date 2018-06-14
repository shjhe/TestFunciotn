var expect = require('chai').expect;
var algorithm = require('../src/algorithm')
console.log(algorithm)
var utils = require('../src/utils')
describe('algorithm', () => {
  // mocha -g maopao
  it('maopao', () => {
    var maopao = algorithm.maopao
    var testArr = utils.RandomArray(20, 10)
    var result = maopao(testArr)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(result))
    
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