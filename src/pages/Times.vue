<template>
  <router-link class="button " to="/">Voltar</router-link>
  <div class="columns">
    <div class="column">
      <formulario_times/>
    </div>
    <div class="column">
      <tabela_times/>
    </div>
  </div>
</template>

<script>
import formulario_times from '../formulario_times.vue'
import tabela_times from '../tabela_times.vue'

let timeNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'estado': '',
    'gols': '',
    'info': ''
  }
}

export default {
  name: "Times",
  components: {tabela_times, formulario_times},
  mounted() {
    this.$store.dispatch('actions_times_carregar')
  }
}
</script>

<style>

</style>