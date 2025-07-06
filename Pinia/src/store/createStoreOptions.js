import { reactive } from "vue";

export function createStoreOptions(id, options, pinia) {
  const store = reactive({});
  console.log(options, "options");
  const { state } = options;
  Object.assign(store, state());
  pinia._s.set(id, store);
  return store;
}
