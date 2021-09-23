<template>
  <router-link to="/">Voltar</router-link>
  <div class="columns is-vcentered">
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