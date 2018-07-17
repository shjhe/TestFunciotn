var expect = require('chai').expect;
var leetCode = require('../src/leetCode')
describe('leetCode', () => {
  // mocha -g lengthOfLongestSubstring
  it('lengthOfLongestSubstring', () => {
    var lengthOfLongestSubstring = leetCode.lengthOfLongestSubstring
    var testCode = 'abcabcbb'
    var result = lengthOfLongestSubstring(testCode)
    expect(result).to.equal(testCode)
  })
})