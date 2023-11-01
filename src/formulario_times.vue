<template>
	<div>
		<Campo v-model="time.nome" nome="Nome"></Campo>
		<CampoDropDown v-model="time.estado" :itens="ESTADOS" nome="Estado"></CampoDropDown>
		<CampoText v-model="time.info" nome="Info" tipo="texto"></CampoText>
		<span v-if="carregando" class="button is-loading">carregando...</span>
		<button v-else class="button is-success" @click="salvar">salvar</button>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import {ESTADOS} from './const.js'

import Campo from './components/Campo.vue'
import CampoDropDown from './components/CampoDropDown.vue'
import CampoText from './components/CampoText.vue'

export default {
	name: 'formulario_times',
	components: {Campo, CampoDropDown, CampoText},
	data() {
		return {
			editando: false,
			ESTADOS,
			time: {}
		}
	},
	computed: {
		...mapState(['carregando'])
	},
	methods: {
		async salvar() {
			if (this.editando) {
				await this.$store.dispatch('actions_time_editar', {
					original: this.editando,
					editado: this.time
				})
				this.editando = false
				this.time = {}
			} else {
				await this.$store.dispatch('actions_time_criar', this.time)
				this.time = {}
			}
		}
	},
	created() {
		this.$bus.on('editar_time', (time) => {
			this.editando = time
			this.time = {...time}
		})
	},
	unmounted() {
		this.$bus.off('editar_time')
	}
}
</script>

<style>

</style>