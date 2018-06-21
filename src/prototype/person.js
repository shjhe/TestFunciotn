function Person (name) {
  this.name = name
}
Person.prototype = {
  construtor: Person,
  getName: function () {
    return this.name
  },
  doSomething: function (name) {
    console.log(this.name + 'doing' + name)
  }
}
module.exports = Person
