<template>
  <router-link class="button" to="/times">Voltar</router-link>
  <div class="columns">
    <div class="column">
      <formulario_jogadores/>
    </div>
    <div class="column">
      <tabela_time/>
    </div>
  </div>

</template>

<script>
// Importar o formulário de jogadores.
import tabela_time from '../tabela_time.vue'
import formulario_jogadores from '../formulario_jogadores.vue'

let jogadorNovo = () => {
  return {
    'id': 'INCREMENT',
    'timeId': 'INCREMENT',
    'nome': '',
    'camisa': '',
    'gols': '',
    'posicao': ''
  }
}

export default {
  name: "Time",
  // Passar o formulário de jogadores no "components".
  components: {tabela_time, formulario_jogadores},
  mounted() {
    this.$store.dispatch('actions_times_carregar')
    this.$store.dispatch('actions_jogadores_carregar')
  },
}
</script>

<style>

</style>