Function.prototype.myCall = function (thisArg, ...args) {
  // console.log("传递参数进来了噢",this);
  var fn = this;
  //对thisArg转成对象类型(防止传入非对象类型报错)
  thisArg = thisArg ? Object(thisArg) : window;
  //调用需要被执行的函数
  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  //等函数执行完之后删掉这个属性
  delete thisArg.fn;
  //返回结果 需不需要return结果，取决于外面是否需要用到这个结果做其他操作
  return result;
};
function foo(a) {
  console.log(this);
}
foo.call({ a: 1 }, 2);
foo.myCall({ a: 1 }, 2);
