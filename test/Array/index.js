var expect = require('chai').expect
var ArrayTest = require('../../src/Array')
describe('ArrayTest', () => {
  // mocha --recursive ./test/Array/*.js
  it('arrayUnique', () => {
    var arrayUnique = ArrayTest.arrayUnique
    var testArr = [1,2,3,4,null, undefined,NaN, null, undefined, '',121,3,'', '', /\d/, /\d/, /\d/, /\d/]
    var resultArr = [1,2,3,4,null, undefined,NaN, '',121, /\d/]
    var result = arrayUnique(testArr)
    console.log(result)
    // 检测返回对象
    expect(result).to.be.an('object').to.have.all.keys('arr', 'maxNum', 'maxText', 'type');
    // 检测返回数组
    expect(JSON.stringify(result.arr)).equal(JSON.stringify(resultArr));
    // 检测数量最多的内容
    expect(JSON.stringify(result.maxText)).equal(JSON.stringify(/\d/));
    expect(result.maxNum).equal(4)
                  
  })
})