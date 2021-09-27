<template>
  <div>
    <table class="table is-hoverable">
      <thead>
      <tr>
        <th>Nome</th>
        <th>Camisa</th>
        <th>Gols</th>
        <th>Posição</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(time, index) in times">
        <td>{{ jogador.nome }}</td>
        <td>{{ jogador.camisa }}</td>
        <td>{{ jogadore.gols }}</td>
        <td>{{ jogador.posicao }}</td>
        <td>{{ jogadores }}</td>
        <td>
          <button class="button is-info" @click="editar(time)">editar</button>
        </td>
        <td>
          <span class="button is-loading" v-if="carregando">carregando</span>
          <button class="button is-danger" v-else @click="actions_time_apagar(time)">apagar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'tabela_times',

  computed: {
    ...mapState(['times', 'carregando']),
  },
  methods: {
    ...mapActions(['actions_time_apagar']),
    editar(time) {
      this.$bus.emit('editar', time)
    }
  }
}
</script>

<style>

</style>
