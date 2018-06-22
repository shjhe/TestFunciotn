## 原型&&原型链

![图片](https://wx4.sinaimg.cn/large/7ed42f5cly1fqguw4y1zej20ge0e8wes.jpg)

> 由上图可以看出实例对象可以根据__proto__属性去往上找他继承的原型从而形成原型链
```javascript
  function Person() {}
  Person.prototype.eat = function () {
    console.log('eating')
  }
  function Student() {} 
  Student.prototype = new Person()
  Student.prototype.constructor = Student
  Student.prototype.learn = function (name) {
    console.log('Student is learning ' + name)
  }
  var student = new Student()
  student.__proto__ === Student.prototype // true
  student.__proto__.__proto__ === Person.prototype // true
  student.__proto__.__proto__.__proto__ === Object.prototype // true 
  student.__proto__.__proto__.__proto__.__proto__ === null // true null生万物就是这里出发的吧
```