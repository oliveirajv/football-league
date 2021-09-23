import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from './pages/Inicio.vue'
import Times from './pages/Times.vue'

const routes = [
    { path: '/', component: Inicio, name: 'inicio'},
    { path: '/times', component: Times, name: 'times'}
]

const rotas = createRouter({
    history: createWebHashHistory(),
    routes
})

export default rotas