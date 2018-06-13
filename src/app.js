function maopao (arr) {
  var _len = arr.length
  for (var i = 0; i < _len; i++) {
    for (var j = i; j < _len; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

module.exports = {
  maopao
}