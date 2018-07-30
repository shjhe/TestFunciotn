var expect = require('chai').expect;
var arguments = require('../../src/arguments')
var utils = require('../../src/utils')
describe('arguments', () => {
  // 测试文件不是在test文件夹下 需要加--recursive 其后添加文件路径
  // mocha -g --recursive "./test/arguments/*.js"
  it('sumArr', () => {
    var sumArr = arguments.sumArr
    var result = sumArr(1)(2,3,4,5).valueOf()
    // console.log(result)
    expect(result).equals(15)
  })
})