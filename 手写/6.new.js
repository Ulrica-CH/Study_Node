// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let p1 = new Person("xy", 18);
// console.log(p1.name);
function myNew(constructor, ...args) {
  let newObj = Object.create(constructor.prototype);
  let result = constructor.apply(newObj, args);
  return result instanceof Object ? result : newObj;
}
function myNew2() {
  let newObj = {};
  newObj.__proto__ = constructor.prototype;
  let constructor = [].shift().call(arguments);
  let result = constructor.apply(newObj, arguments);
  return result instanceof Object ? result : newObj;
}
const p2 = myNew(Person, "xy", 18);
console.log(p2.name);
