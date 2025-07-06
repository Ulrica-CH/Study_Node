import { ref } from "vue";

export const piniaSymbol = Symbol();
export function createStore() {
  const state = ref({});
  const pinia = {
   
    install(app) {
      console.log(app);
       /** 挂载 */
      app.config.globalProperties.$pinia = pinia;

      app.provide(piniaSymbol, pinia);
    },
    state,
    /** 存储 store 仓库 */
    _s: new Map(),
  };

  return pinia;
}
