function RandomNum (Max = 100) {
  var num = Math.random() * Max
  return Math.round(num)
}
function RandomArray (Len, Max) {
  var result = []
  for (var i = 0; i < Len; i++) {
    result.push(RandomNum(Max))
  }
  return result
}
// 混淆数组
function GarbleArray (arr) {
  var len = arr.length
  if (!len) return arr
  var randomNum = RandomNum(len - 1) // 随意函数返回 0 - len的数 需要减1
  var randomVal = arr.splice(randomNum, 1)[0]
  
  return [randomVal].concat(GarbleArray(arr))
}
module.exports = {
  RandomArray,
  GarbleArray
}
