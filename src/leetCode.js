module.exports.lengthOfLongestSubstring = function (str) {
  var temp = []
  var max_index = 0
  var tempStr = ''
  for(var i = 0, _len=str.length; i < _len; i++) {
    var char = str.charAt(i)
    if (tempStr.indexOf(char) === -1) {
        tempStr += char
    } else {
        let len = temp.push(tempStr)
        max_index = len - 1
        tempStr = ''
    }
    console.log(char, tempStr, tempStr.indexOf(char))
  }
  console.log(temp)
  return temp[max_index]
}
setInterval(() => {
  shua()
}, 10e3)

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