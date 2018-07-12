// var obj = {
//   a: {
//     b: {
//       c: {
//         d: 'h',
//         j: 'l',
//         o: {
//           p: 'q',
//           r: 's'
//         },
//         t: 'u'
//       }
//     },
//     v: {
//       w: {
//         x: {
//           y: 'z'
//         }
//       }
//     }
//   },
//   e: {
//     f: {
//       i: 'k'
//     },
//     m: 'n'
//   }
// }

// //输出结果，按照层数，把同一层的属性放在同一个子数组内
// var result = [[a, e], [b, v, f, m], [c, w, i], [d, j, o, t, x], [p, r, y]];
function getProp(obj) {
  //输出结果数组
  var result = [];
  //递归层数，也就是属性层数
  var num = 0;

  function temp(obj) {
    //获取对象的属性数组
    var keys = Object.keys(obj);
    var len = keys.length;
    for (var i = 0; i < len; i++) {
      //判断属性值，如果是对象，则递归遍历
      if (typeof obj[keys[i]] == 'object') {
        // 如果属性是对象，层数加一
        num++;
        //用result[num-1]存储每一层的结果，如果该层首次存储属性名称，初始化为空数组
        if (typeof result[num - 1] != 'object') {
          result[num - 1] = [];
        }
        result[num - 1].push(keys[i]);
        temp(obj[keys[i]]);
        //注意当一层的所有属性都遍历完之后，返回上一层
        if (i == len - 1) {
          num--;
        }
      } else {
        //如果属性不是层数，那么先对层数加一，存入后再减一
        num++;
        if (typeof result[num - 1] != 'object') {
          result[num - 1] = [];
        }
        result[num - 1].push(keys[i]);
        num--;
        if (i == len - 1) {
          num--;
        }
      }
    }
  }
  temp(obj)
  return result
}

module.exports.getProp = getProp