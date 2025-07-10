<script setup lang="ts">
import { ref, reactive,shallowRef, watchEffect, triggerRef } from "vue";
// const state = shallowRef({
//   count: 0,
//   user: { name: "Alice" },
// });

// watchEffect(() => {
//   console.log(state.value);
// });
// state.value.count = 1;
// triggerRef(state);
// // state.value = {
// //   count: 1,
// //   user: { name: "Alice" },
// // };
// // state.value.count = 1;

const info  = reactive({
  a: 1
})
const 
</script>

<template>
  <div>{{ obj.a }}</div>
  <div>{{ obj1 }}</div>
</template>

<style scoped></style>
