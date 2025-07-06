import { defineStore } from "../defineStore";

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount() {
      return this.count * 2;
    }
  },
  actions: {
    
    increment() {
      console.log(this)
      this.count++;
    },
  },
});

// export default useCountStore;