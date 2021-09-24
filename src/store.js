import {createStore} from 'vuex'
import axios from 'axios'
import {TIMESURL, JOGADORESURL} from './const.js'

const store = createStore({
    state() {  // equivalente ao data de um componente
        return {
            carregando: false,
            times: []
        }
    },
    getters: { // equivalente ao computed de um componente

    },
    mutations: { // altera o state
        carregando(state) {
            state.carregando = true
        },
        time_carregado(state, times) {
            state.times = times
            state.carregando = false
        },
        time_apagar(state, time) {
            let index = state.times.indexOf(time)
            if (index >= 0) {
                state.times.splice(index, 1)
            }
            state.carregando = false
        },
        time_editar(state, {original, editado}) {
            Object.assign(original, editado)
            state.carregando = false
        },
        time_criar(state, time) {
            state.times.push(time)
            state.carregando = false
        }
    },
    actions: { // equivalente ao methods de um componente
        // Actions dos times.
        async actions_times_carregar({commit}) {
            commit('carregando')

            axios.get(TIMESURL).then(({data}) => {
                commit('time_carregado', data)
            })
        },
        async actions_time_apagar({commit}, time) {
            commit('carregando')

            await axios.delete(`${TIMESURL}/${time.id}`)
            commit('time_apagar', time)

        },
        async actions_time_criar({commit}, time) {
            commit('carregando')
            await axios.post(TIMESURL, {...time}).then((Data) => {
                time.id = Data.data.id
                commit('time_criar', time)
            })
        },
        async actions_time_editar({commit}, {original, editado}) {
            commit('carregando')

            await axios.put(`${TIMESURL}/${original.id}`, {...editado})
            commit('time_editar', {original, editado})
        },
        // Actions dos Jogadores.
        async actions_jogadores_carregar({commit}) {
            commit('carregando')

            axios.get(JOGADORESURL).then(({data}) => {
                commit('time_carregado', data)
            })
        },
        async actions_jogador_apagar({commit}, time) {
            commit('carregando')

            await axios.delete(`${JOGADORESURL}/${time.id}`)
            commit('time_apagar', time)

        },
        async actions_jogador_criar({commit}, time) {
            commit('carregando')
            await axios.post(JOGADORESURL, {...time}).then((Data) => {
                time.id = Data.data.id
                commit('time_criar', time)
            })
        },
        async actions_jogador_editar({commit}, {original, editado}) {
            commit('carregando')

            await axios.put(`${JOGADORESURL}/${original.id}`, {...editado})
            commit('time_editar', {original, editado})
        }
    }
})

export default store
