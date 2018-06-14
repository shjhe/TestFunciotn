var expect = require('chai').expect
var utils = require('../src/utils')
describe('utils', () => {
  it('RandomArray', () => {
    // mocha -g utils
    var RandomArray = utils.RandomArray
    expect(RandomArray(20, 10)).to.be.an('Array').that.does.not.include(11)
  })
  it('GarbleArray', () => {
    var GarbleArray = utils.GarbleArray
    var testArr = [1, 2, 3, 4, 5, 6]
    expect(GarbleArray(testArr)).to.not.equal(testArr)
  })
})