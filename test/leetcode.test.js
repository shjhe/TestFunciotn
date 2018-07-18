var expect = require('chai').expect;
var leetCode = require('../src/leetCode')
describe('leetCode', () => {
  // mocha -g lengthOfLongestSubstring
  it('lengthOfLongestSubstring', () => {
    var lengthOfLongestSubstring = leetCode.lengthOfLongestSubstring
    var testArr = [
      { str: 'abcabcbb', result: 3 },
      { str: 'bbbbbbb', result: 1 },
      { str: 'pwwkew', result: 3 },
      { str: 'aab', result: 2 },
      { str: 'dvdf', result: 3 },
      { str: 'okodaewdsa', result: 6 }
    ]
    testArr.forEach(item => {
      var result = lengthOfLongestSubstring(item.str)
      expect(result).to.equal(item.result)
    })
  })
})