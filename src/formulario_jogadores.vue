<template>
	<div>
		<Campo v-model="jogador.nome" nome="Nome"></Campo>
		<Campo v-model="jogador.camisa" nome="Camisa"></Campo>
		<Campo v-model="jogador.gols" nome="Gols"></Campo>
		<CampoDropDown v-model="jogador.posicao" :itens="POSICOES" nome="Posição"></CampoDropDown>

		<span v-if="carregando" class="button is-loading">carregando...</span>
		<button v-else class="button is-success" @click="salvar">salvar</button>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {POSICOES} from "./const";

import Campo from './components/Campo.vue'
import CampoDropDown from './components/CampoDropDown.vue'

export default {
	name: "formulario_jogadores",
	components: {Campo, CampoDropDown},
	data() {
		return {
			editando: false,
			POSICOES,
			jogador: {}
		}
	},
	computed: {
		...mapState(['carregando'])
	},
	methods: {
		async salvar() {
			if (this.editando) {
				await this.$store.dispatch('actions_jogador_editar', {
					original: this.editando,
					editado: this.jogador
				})
				this.editando = false
				this.jogador = {}
			} else {
				this.jogador['time_id'] = this.$route.params.id
				await this.$store.dispatch('actions_jogador_criar', this.jogador)
				this.jogador = {}
			}
		}
	},
	created() {
		this.$bus.on('editar_jogador', (jogador) => {
			this.editando = jogador
			this.jogador = {...jogador}
		})
	},
	unmounted() {
		this.$bus.off('editar_jogador')
	}
}
</script>

<style>

</style>