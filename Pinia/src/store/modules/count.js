import { defineStore } from "../defineStore";

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// export default useCountStore;