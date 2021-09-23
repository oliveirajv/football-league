<template>
  <h1>Times</h1>
  <Formulario/>
  <Tabela/>

  <router-view></router-view>
</template>

<script>
import Inicio from './pages/Inicio.vue'

import Formulario from './Formulario.vue'
import Tabela from './Tabela.vue'

let timeNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'estado': '',
    'torcida': '',
    'fundacao_ano': '',
    'info': ''
  }
}

export default {
  components: {Tabela, Formulario, Inicio},
  mounted() {
    this.$store.dispatch('carregar')
  }
}
</script>

<style>

</style>