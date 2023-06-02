import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './routers'
import store from './store'


  



createApp(App).use(store).use(router).mount('#app')

