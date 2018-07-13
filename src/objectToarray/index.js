// var obj = {"a":{"b":{"c":{"d":"h","j":"l","o":{"p":"q","r":"s"},"t":"u"}},"v":{"w":{"x":{"y":"z"}}}},"e":{"f":{"i":"k"},"m":"n"}}
//输出结果，按照层数，把同一层的属性放在同一个子数组内
// var result = [[a, e], [b, v, f, m], [c, w, i], [d, j, o, t, x], [p, r, y]];

// 解决思路
/*
 *  给每层对象下添加一个索引属性，初始下为0，逐层加1
 *  初始化一个数组，每个索引下新建一个数组，并保持添加当前递归层的key
 */

function getProp(obj, result) {
  result = result || []
  obj._index = obj._index || 0
  result[obj._index] = result[obj._index] || []
  for(var key in obj) {
    if (key === '_index') continue
    result[obj._index].push(key)
    if (typeof obj[key] === 'object') {
      obj[key]._index = obj._index + 1
      getProp(obj[key], result)
    }
  }
  return result
}

module.exports.getProp = getProp