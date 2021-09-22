<template>
  <h3>Times</h3>
  <Tabela/>
  <Formulario/>
</template>

<script>
import Formulario from './Formulario.vue'
import Tabela from './Tabela.vue'

let timeNovo = () => {
  return {
    'id': 'INCREMENT',
    'name': '',
    'state': '',
    'crowd': '',
    'foundation_year': '',
    'info': ''
  }
}

export default {
  components: {Tabela, Formulario},
  mounted() {
    this.$store.dispatch('carregar')
  }
}
</script>

<style>

</style>