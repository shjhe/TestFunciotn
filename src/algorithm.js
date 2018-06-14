module.exports.maopao = function (arr) {
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

var quick = function (arr) {
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
module.exports.quick = quick
/**
 * 思路描述
 * 首先从第二个开始处理，默认第一个是有序的
 * 记录当前开始位置@param{temp}，如第@param{i=4}个 则开始比较的第一个数为第@param{j=i-1}个
 * 进入循环，如果@param{j}>=0 保证 j--之后最小为-1,且小于（根据正序 还是 反序切换）temp
 * 交换比较的两个数的位置，因为temp一直在缓存中，只需要当前j+1位置更新为j位置的数，例子如下
 * [1,3,4,5,2] 假设当前位置为4 => temp = 2, i = 4, j = 3
 * j >= 0 && 2 < 5 => [1, 3, 4, 5, 5] j-- => j = 2
 * j >= 0 && 2 < 4 => [1, 3, 4, 4, 5] j-- => j = 1
 * j >= 0 && 2 < 3 => [1, 3, 3, 4, 5] j-- => j = 0
 * j >= 0 && 2 不小于 1 退出循环 j = 0
 * 数组j+1 的位置 替换为 temp 完成一次插入
 */
module.exports.pushSort = function (arr) {
  var len = arr.length, tmp, i, j
  for (i = 1; i < len; i++) {
    tmp = arr[i] // 缓存当前
    j = i - 1 // 记录开始比较位置，以当前索引的后一个
    while (j>=0 && tmp < arr[j]) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = tmp
  }
  return arr
}
