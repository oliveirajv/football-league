<template>
  <div>
    <Campo nome="Nome" v-model="jogador.nome"></Campo>
    <Campo nome="Camisa" tipo="number" v-model="jogador.camisa"></Campo>
    <Campo nome="Gols" tipo="number" v-model="jogador.gols"></Campo>
    <CampoDropDown nome="Posição" v-model="jogador.posicao" :itens="POSICOES"></CampoDropDown>

    <span class="button is-loading" v-if="carregando">carregando...</span>
    <button class="button is-success" v-else @click="salvar">salvar</button>
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
        await this.$store.dispatch('actions_jogador_criar', this.jogador)
        this.jogador = {}
      }
    }
  },
  created() {
    this.$bus.on('editar', (jogador) => {
      this.editando = jogador
      this.jogador = {...jogador}
    })
  },
  unmounted() {
    this.$bus.off('editar')
  }
}
</script>

<style>

</style>