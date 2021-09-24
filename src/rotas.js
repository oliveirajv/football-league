import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from './pages/Inicio.vue'
import Times from './pages/Times.vue'
import Time from './pages/Time.vue'

const routes = [
    { path: '/', component: Inicio, name: 'inicio'},
    { path: '/times', component: Times, name: 'times'},
    { path: '/time/:id', component: Time, name: 'time'},
]

const rotas = createRouter({
    history: createWebHashHistory(),
    routes
})

export default rotas