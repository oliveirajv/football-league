<template>
  <router-link class="button " to="/">Voltar</router-link>
  <div class="columns">
    <div class="column">
      <Formulario/>
    </div>
    <div class="column">
      <Tabela/>
    </div>
  </div>
</template>

<script>
import Formulario from '../Formulario.vue'
import Tabela from '../Tabela.vue'

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
  components: {Tabela, Formulario},
  mounted() {
    this.$store.dispatch('carregar')
  }
}
</script>

<style>

</style>