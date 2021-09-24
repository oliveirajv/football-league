<template>
  <h3>Time Flamengo</h3>
  <formulario_times/>
  <tabela_times/>
</template>

<script>
import formulario_times from '../formulario_times.vue'
import tabela_times from '../tabela_times.vue'

let jogadorNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'gols': ''
  }
}

export default {
  name: "Time",
  components: {tabela_times, formulario_times},
  mounted() {
    this.$store.dispatch('carregar')
  }
}
</script>

<style>

</style>