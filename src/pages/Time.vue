<template>
  <h3>Time Flamengo</h3>
  <tabela_time/>
</template>

<script>
import tabela_time from '../tabela_time.vue'

let jogadorNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'camisa': '',
    'gols': '',

  }
}

export default {
  name: "Time",
  components: {tabela_time},
  mounted() {
    this.$store.dispatch('actions_jogadores_carregar')
  }
}
</script>

<style>

</style>