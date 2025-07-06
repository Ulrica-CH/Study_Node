import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createStore} from './store1'



const app = createApp(App)
const pinia = createStore()
app.use(pinia)
app.mount('#app')

