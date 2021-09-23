<template>
  <router-link to="/">Voltar</router-link>
  <Formulario/>
  <Tabela/>
</template>

<script>
import Formulario from '../Formulario.vue'
import Tabela from '../Tabela.vue'

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
  name: "Times",
  components: { Tabela, Formulario },
  mounted() {
    this.$store.dispatch('carregar')
  }
}
</script>

<style>

</style>