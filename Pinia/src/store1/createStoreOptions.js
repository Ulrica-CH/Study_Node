import { computed, reactive, toRefs } from "vue";

export function createOptionsStore(id, options, pinia) {
  const store = reactive({});

  const { state, actions, getters } = options;

  //this指向
  const withActions = (actions) => () => actions.call(store, ...arguments);

  // function
  function setup() {
    pinia.state.value[id] = state ? state() : {};

    // const localState = pinia.state.value[id];
    //  响应式
    const localState = toRefs(pinia.state.value[id]);

    return Object.assign(
      localState,
      actions,
      Object.keys(getters).reduce((compGetters, getter) => {
        compGetters[getter] = computed(() => getters[getter].call(store));
        return compGetters;
      }, {})
    );
  }

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
  console.log("setupActions", setupActions, pinia);
  Object.assign(store, setupActions);
  pinia._s.set(id, store);
  return store;
}
