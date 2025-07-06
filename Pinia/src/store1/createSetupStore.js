import {  reactive } from "vue";
export function createSetupStore(id, setup, pinia) {
  const store = reactive({});
  //this指向
  const withActions = (actions) => () =>  actions.call(store, ...arguments)
  const setupActions = setup();
  /**
   * for in遍历的是数组的索引（即键名）
   * 而for of遍历的是数组元素值且不包括数组的原型属性method和索引name
   * for in 适合遍历对象，for of 用于遍历数组
   */
  for (let key in setupActions) {
    console.log(key);
    const value = setupActions[key];
    if (typeof value === "function") {
      setupActions[key] = withActions(value);
    }
  }
  Object.assign(store, setupActions);
  pinia._s.set(id, store);
  return store;
}
