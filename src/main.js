import { createApp } from 'vue'
import store from './store'
import rotas from "./rotas";
import mitt from 'mitt'

// import Vue from 'vue'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
//
// Vue.use(Buefy)

import App from './App.vue'

const bus = mitt()
const app = createApp(App)
app.use(store)
app.use(rotas)
app.config.globalProperties.$bus = bus
app.mount('#app')
