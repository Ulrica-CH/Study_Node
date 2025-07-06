<script setup lang="ts">
import {piniaSymbol} from './store1/creatStore'
import { inject } from 'vue';
import {useCountStore} from './store1/modules/count'

const countStore = useCountStore()
console.log('countStore',countStore)
console.log(inject(piniaSymbol));

const {increment} = countStore
</script>

<template>
    <div class="app">

        <div>{{countStore.count}}</div>
        <div>{{countStore.doubleCount}}</div>

        <button @click="countStore.increment">+1</button>
        <button @click="increment">+1</button>
    </div>
</template>

<style scoped >
.app{
    
}
</style>