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
					<button class="button is-small is-info" @click="editar_time(time)">editar
					</button>
				</td>
				<td>
					<span v-if="carregando" class="button is-loading">carregando</span>
					<button v-else class="button is-small is-danger"
					        @click="actions_time_apagar(time)">apagar
					</button>
				</td>
				<td>
					<router-link :to="{ name: 'time', params: { id: time.id }}"
					             class="button is-small is-link">Ver time
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
		editar_time(time) {
			this.$bus.emit('editar_time', time)
		}
	}
}
</script>

<style>

</style>
