import { defineStore } from "../defineStore";
import { ref, computed } from 'vue'
export const useCountStore = defineStore("count1",() => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++;
  }

  return { count, doubleCount, increment }
})

// export default useCountStore;