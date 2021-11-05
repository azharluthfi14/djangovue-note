import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './main.css'
import mitt from 'mitt'
import { VueMasonryPlugin } from "vue-masonry/src/masonry-vue3.plugin";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const emitter = mitt()


axios.defaults.baseURL = "http://127.0.0.1:8000/"

let app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(store).use(router).use(VueMasonryPlugin).use(Toast).mount('#app')


