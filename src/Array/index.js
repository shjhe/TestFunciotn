/**
 * 说明 数组对象中含有各式各样的数据 如 “” NaN {} null undefined等
 */
module.exports.arrayUnique = function (arr) {
  // 特殊处理
  var _len = arr.length
  if (_len <= 1) return arr
  // 正文处理
  var tempObj = {}, result = [], maxNum = 0, maxText = ''
  for(var i = 0; i < _len; i++) {
    var item = arr[i]
    if(!tempObj.hasOwnProperty(item)) {
      result.push(item)
      tempObj[item] = 1
    } else {
      tempObj[item] += 1 // 数量加1
      if (tempObj[item] > maxNum) {
        maxNum = tempObj[item]
        maxText = item
      }
    }
  }
  console.log(result, maxNum, maxText)
  return {
    arr: result,
    maxNum,
    maxText,
    type: typeof maxText
  }
}