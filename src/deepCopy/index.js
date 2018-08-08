function deepCopy (argument) {
  var result;
  // 非对象处理 同事处理null undefined
  if (!argument || typeof argument !== 'object') {
    console.log('空值返回', argument)
    return argument
  }
  var arg_type = Object.prototype.toString.call(argument).slice(8, -1)
  result = {
    'Object': {},
    'Array': []
  }[arg_type]
  for (var key in argument) {
    var item = argument[key]
    var type = Object.prototype.toString.call(item).slice(8, -1)
    switch (type) {
      case 'Object':
      // console.log("Object =>>>", item)
        result[key] = arguments.callee(item)
        break
      case 'Array':
        // console.log("Array =>>>", item)
        result[key] = arguments.callee(item)
        break
      default:
        // console.log("switch =>>>", item)
        result[key] = item
    }
    // console.log('type =>>>', type)
    // console.log('item =>>>', item)
    console.log('result[key] =>>>', result[key])
  }
  return result
}

module.exports.deepCopy = deepCopy
