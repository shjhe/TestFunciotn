function maopao (arr) {
  var _len = arr.length
  for (var i = 0; i < _len; i++) {
    for (var j = i + 1; j < _len; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function quick (arr) {
  var length = arr.length
  if (length <= 1) return arr
  var left = [] // 根据正序 反序处理小于基准的数的位置 此处用正序 所以小于基准的放在left
  var right = [] // 根据正序 反序处理小于基准的数的位置 此处用正序 所以大于基准的放在right
  // 选取基准点取半
  var pointIndex = Math.floor(length / 2)
  var pointValue = arr.splice(pointIndex, 1)[0]
  for(var i = 0; i < length - 1; i++) {
    arr[i] > pointValue ? right.push(arr[i]) : left.push(arr[i])
  }
  return [].concat(quick(left), [pointValue], quick(right))
}

module.exports = {
  maopao,
  quick
}