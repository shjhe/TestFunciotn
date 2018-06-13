var expect = require('chai').expect;
var maopao = require('../src/app').maopao
describe('upload_api', () => {
  it('upload', () => {
    var result = maopao([3, 2, 1])
    expect(result).to.equal([1, 2, 3])
  })
})