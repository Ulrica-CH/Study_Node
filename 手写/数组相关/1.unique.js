/** 数组去重 */
const arr = [ 1, 7, 7, NaN, NaN, null, null, undefined, undefined, 
  "1", "1", true, true, { a: 1 }, { a: 1 },
];
/**
 * set
 * 无法去重对象
 * */
function unique(arr) {
  return [...new Set(arr)];
}
/**
 * filter + indexOf  只找第一次出现的
 * indexOf 内部用的是严格相等（===）来判断元素是否相等
 * 无法正确找出 NaN js 会判断 NaN === NaN 为 false
 * 无法去重对象
 * */
function unique1(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
/**
 * Map
 * 无法去重对象
 * */
function unique2(arr) {
  let map = new Map();
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
    }
  });
  return Array.from(map.keys());
}
function unique3(arr) {
  let map = new Map();
  return arr.filter((item) => {
    if (!map.has(item)) {
      map.set(item, true);
      return true;
    }
    return false;
  });
}
/** map 根据 key 进行对象去重 */
function unique4(arr, key) {
  let map = new Map();
  let myKey = null;
  return arr.filter((item) => {
    if (typeof item === "object" && item !== null && item[key]) {
      myKey = JSON.stringify(item);
    } else {
      myKey = item;
    }
    if (!map.has(myKey)) {
      map.set(myKey, true);
      return true;
    }
    return false;
  });
}
/** 
 * reduce 
 * 可以去重 NaN
 * 没法去重对象
 * */
function unique6(arr) {
  return arr.reduce(
    (pre, cur) => (pre.includes(cur) ? pre : [...pre, cur]),
    []
  );
}
