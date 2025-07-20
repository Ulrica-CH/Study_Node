// const arr = [1, 2, 3, [[3, 4, [8]]]];
const arr = [1, 3, [2, [3]], 4];
/** flat */
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray(arr));

/** reduce 递归 */
function flattenArray2(arr) {
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? pre.concat(flattenArray2(cur)) : pre.concat(cur),
    []
  );
}
console.log(flattenArray2(arr));

/** 递归 */
function flattenArray3(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr = newArr.concat(flattenArray3(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(flattenArray3(arr));

/** 使用栈 */
function flattenArray4(arr) {
  let stack = [...arr];
  let res = [];
  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      res.unshift(item);
    }
  }
  return res;
}
console.log(flattenArray4(arr));
