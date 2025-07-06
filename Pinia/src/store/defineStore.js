import { getCurrentInstance, inject } from "vue";
import { piniaSymbol } from "./creatStore";
import { createStoreOptions } from "./createStoreOptions";
export function defineStore(idOrOptions, setup) {
  let id;
  let options;
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
      /** 初始化store */
      createStoreOptions(id, options, pinia);
    }
    return pinia._s.get(id);
  }

  return useStore;
}
