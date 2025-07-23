Function.prototype.myBind = function (thisArg, ...argArray) {
  thisArg =
    thisArg !== undefined && thisArg !== null ? Object(thisArg) : window;
  thisArg.fn = this;
  function proxyFn(...args) {
    let finalArgs = [...argArray, ...args];
    const res = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return res;
  }

  return proxyFn;
};
function foo(num1, num2, num3, num4) {
  console.log(this, num1, num2, num3, num4);
}

var bar = foo.bind("小余", 10, 20);
var bar1 = foo.myBind("小余", 10, 20);
bar(30, 80);
bar1(31, 81);
