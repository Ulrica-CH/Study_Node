function myInstanceof(instance, classOrFunc) {
  if (typeof instance !== "object" || instance === null) return false;
  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    if (proto === classOrFunc.prototype) return true;
    proto = Object.getPrototypeOf(proto);
    console.log(proto)
  }
  return false
}
/** Object.getPrototypeOf 相当于 __proto__ */
// console.log(myInstanceof(1, Number))
// console.log(Object.getPrototypeOf(Object))