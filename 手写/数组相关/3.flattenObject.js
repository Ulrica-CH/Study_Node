const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f:[1,2,3]
};
function flattenObject(obj, prefix = "", res = {}) {
  for (let key in obj) {
    let value = obj[key];
    let neyKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value) {
      flattenObject(value, neyKey, res);
    } else {
      res[neyKey] = value;
    }
  }
  return res;
}
console.log(flattenObject(obj));
