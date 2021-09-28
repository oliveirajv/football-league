<template>
  <router-link class="button" to="/times">Voltar</router-link>
  <div>
    <tabela_time/>
  </div>
</template>

<script>
// Importar o formulário de jogadores.
import tabela_time from '../tabela_time.vue'

let jogadorNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'camisa': '',
    'gols': '',
    'posicao': ''
  }
}

export default {
  name: "Time",
  // Passar o formulário de jogadores no "components".
  components: {tabela_time},
  mounted() {
    this.$store.dispatch('actions_times_carregar')
    this.$store.dispatch('actions_jogadores_carregar')
  },
}
</script>

<style>

</style>