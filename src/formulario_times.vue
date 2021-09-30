<template>
  <div>
    <Campo nome="Nome" v-model="time.nome"></Campo>
    <CampoDropDown nome="Estado" v-model="time.estado" :itens="ESTADOS"></CampoDropDown>
    <CampoText tipo="texto" nome="Info" v-model="time.info"></CampoText>
    <span class="button is-loading" v-if="carregando">carregando...</span>
    <button class="button is-success" v-else @click="salvar">salvar</button>
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