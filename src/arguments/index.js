/**
 * 实现sum(1)(2,3)(4).valueOf() 输出10
 * 方法1
 * 直接使用arguments.callee,即方法本身去重写valueOf
 * 但是有个弊端就是  如果重复使用，数据会出错，fn.sum如何清空？
 * 想到一个方法  调用valueOf的时候 清空值就可以了，但也存在另一个问题，如果一直不清空，然后继续调用呢，还是会保留原有值
 * 当然如果需求正好需要这样的处理方式，perfect，这种处理方式刚好可以解决，类似函数科里化一样，保留原有的值，继续处理后续值
 * 方法二
 * 原方法写了个变量存储每次调用时传入的值的和，形成闭包，当fn调用valueOf的时候输出总和
 */
module.exports.sumArr = function () {
  // 因为都偏向笔试题 只用ES5
  // 方法1
  var fn = arguments.callee
  var n = fn.sum || 0
  var arr = Array.prototype.slice.apply(arguments) || []
  for(var i = 0, _len = arr.length; i < _len; i++) {
    n += arr[i]
  }
  fn.valueOf = function () {
    var total = fn.sum
    fn.sum = 0
    return total
  }
  fn.sum = n
  return fn
  // 方法二
  // var sum = function (arg) {
  //   var n = 0
  //   var arr = Array.prototype.slice.apply(arguments) || []
  //   for(var i = 0, _len = arr.length; i < _len; i++) {
  //     n += arr[i]
  //   }
  //   return n
  // }
  // var total = sum(arguments)
  // var fn = function () {
  //   return total + sum(arguments)
  // }
  // fn.valueOf = function () {
  //   return total
  // }
  // return fn
}