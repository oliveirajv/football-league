<template>
  <div>
    <h1>{{ codigo }}</h1>

    <ul>
      <li v-for="time in produto.times" :key="time.id">
        <router-link :to="{name: 'time', params: {codigo: produto.codigo, tamanho: time.id }}">
          {{ time.nome }}
        </router-link>
      </li>
    </ul>
<!--    <table class="table is-hoverable">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>Nome</th>-->
<!--        <th>Camisa</th>-->
<!--        <th>Gols</th>-->
<!--        <th>Posição</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="time in time.times" :key="time.id">-->
<!--        <router-link :to="{name: 'time', params: {codigo: time.codigo, tamanho: tamanho.id }}">-->
<!--          {{ time.nome }}-->
<!--        </router-link>-->
<!--        <td>-->
<!--          <button class="button is-info" @click="editar(time)">editar</button>-->
<!--        </td>-->
<!--        <td>-->
<!--          <span class="button is-loading" v-if="carregando">carregando</span>-->
<!--          <button class="button is-danger" v-else @click="actions_time_apagar(time)">apagar</button>-->
<!--        </td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'tabela_time',
  computed: {
    ...mapGetters(['pegarTime']),
    codigo() {
      return this.$route.params.id
    },
    produto() {
      return this.pegarTime(this.codigo)
    }
  },
  methods: {
    ...mapActions(['actions_jogador_apagar']),
    editar(jogador) {
      this.$bus.emit('editar', jogador)
    }
  }
}
</script>

<style>

</style>
