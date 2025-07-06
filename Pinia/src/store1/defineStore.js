import { getCurrentInstance, inject } from "vue";
import { piniaSymbol } from "./creatStore";
import { createOptionsStore } from "./createStoreOptions";
import { createSetupStore } from "./createSetupStore";
export function defineStore(idOrOptions, setup) {
  let id;
  let options;

  const isSeupStore = typeof setup === "function";
  /** options composition写法兼容 */
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = setup;
  } else {
    id = idOrOptions.id;
    options = idOrOptions;
  }
  function useStore() {
    /** 判断是否在组件里 */
    const pinia = getCurrentInstance() && inject(piniaSymbol);
    if (!pinia._s.has(id)) {
      if (isSeupStore) {
        /** 初始化 setup store */
        createSetupStore(id, options, pinia);
      } else {
        /** 初始化 options store */
        createOptionsStore(id, options, pinia);
      }
    }
    return pinia._s.get(id);
  }

  return useStore;
}
