var expect = require('chai').expect;
var arguments = require('../../src/arguments')
var utils = require('../../src/utils')
describe('arguments', () => {
  // 测试文件不是在test文件夹下 需要加--recursive
  // mocha -g --recursive sumArr
  it('sumArr', () => {
    var sumArr = arguments.sumArr
    var result = sumArr(1)(2,3,4,5).valueOf()
    // console.log(result)
    expect(result).equals(15)
  })
})