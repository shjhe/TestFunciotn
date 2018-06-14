var expect = require('chai').expect;
var algorithm = require('../src/algorithm')
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
    var GarbleArray = utils.GarbleArray
    for (var i = 0; i < 10; i++) {
      var testArr = utils.RandomArray(30, 100)
      var result = quick(Object.assign([], testArr))
      expect(JSON.stringify(result)).to.equal(JSON.stringify(testArr.sort((a, b) => a - b)))
    }
  })
})