import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/css/font.css"
import "./assets/css/reset.css"
import "./assets/css/color.css"
import "./assets/css/profile.css"
import "./assets/css/common.css"
import "./assets/css/night.css"

import "./assets/js/night.js"

createApp(App).use(store).use(router).mount('#app')
