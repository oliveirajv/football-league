<template>
  <div>
    <table class="table is-hoverable">
      <thead>
      <tr>
        <th>Nome</th>
        <th>Estado</th>
        <th>Gols</th>
        <th>info</th>
        <th>Editar</th>
        <th>Apagar</th>
        <th>Elenco</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="time in times">
        <td>{{ time.nome }}</td>
        <td>{{ time.estado }}</td>
        <td>{{ time.gols }}</td>
        <td>{{ time.info }}</td>
        <td>
          <button class="button is-small is-info" @click="editar(time)">editar</button>
        </td>
        <td>
          <span class="button is-loading" v-if="carregando">carregando</span>
          <button class="button is-small is-danger" v-else @click="actions_time_apagar(time)">apagar</button>
        </td>
        <td>
          <router-link class="button is-small is-link" :to="{ name: 'time', params: { id: time.id }}">Ver time
          </router-link>
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
