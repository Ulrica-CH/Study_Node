import { computed, reactive, toRefs } from "vue";
import { createSetupStore } from "./createSetupStore";

export function createOptionsStore(id, options, pinia) {
  const store = reactive({});
  const { state, actions, getters } = options;
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
  createSetupStore(id, setup, pinia);
}
