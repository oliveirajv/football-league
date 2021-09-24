<template>
  <h3>Times</h3>
  <Formulario/>
  <Tabela/>
</template>

<script>
import Formulario from '../Formulario'
import Tabela from '../Tabela.vue'

let jogadorNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'gols': ''
  }
}

export default {
  name: "Jogadores",
  components: {Tabela, Formulario},
  mounted() {
    this.$store.dispatch('carregar')
  }
}
</script>

<style>

</style>