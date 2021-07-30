import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'

const GStore = reactive({ flashMessage: '' })
const GStoreE = reactive({ flashMessage: '' })


createApp(App).use(store).use(router).provide('GStore',GStore).provide('GStoreE',GStoreE).mount('#app')