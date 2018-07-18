/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 思路
 * 设定两个变量，一个存储结果=变量@param{a}，一个存储遍历过程中连续的不重复的字符串=变量@param{b}
 * 遍历字符串，如果当前字符不在@param{a}中，则追加，如果在的话，先对比当前@param{a}与@param{b}的长度，是否为新的最长的结果字符串，然后重置@param{a}为当前字符在@param{a}中的位置后的字符 + 当前字符
 * 因为可能会存在整个字符串都是不重复了，需要在最后一次对比@param{a}与@param{b}的长度，确保每个@param{a}都比较过
 * 最后返回@param{b}
 */
module.exports.lengthOfLongestSubstring = function (str) {
  var str_len = str.length
  if (str.length <= 1) return str.length
  var maxstr = '', tempStr = ''
  for(var i = 0; i < str_len; i++) {
    var char = str.charAt(i)
    if (tempStr.indexOf(char) !== -1) {
      maxstr = tempStr.length > maxstr.length ? tempStr : maxstr
      tempStr = tempStr.slice(tempStr.indexOf(char) + 1) + char
    } else {
      tempStr += char
    }
  }
  maxstr = tempStr.length > maxstr.length ? tempStr : maxstr
  return maxstr.length
}

// var fun = {
//   timmer: '',
//   init: function () {
//     let iframe = window.frames[3]
//     iframe.document.getElementById('ksxq').value = "0305"
//     let arr = ['03708', '07114', '03709']
//     arr.forEach(item => {
//       setTimeout(() => {
//         iframe.document.getElementById('kmdm').value = item
//         iframe.document.getElementById('tjkm').click()
//       }, 500)
//     })
//     setTimeout(() => {
//       iframe.save()
//     }, 1000)
//   },
//   start: function (num = 5) {
//     // num为间隔分钟 默认5分钟
//     this.init()
//     this.timmer = setInterval(() => {
//       this.init()
//     }, num * 60e3)
//   },
//   stop: function () {
//     clearInterval(this.timmer)
//   }
// }