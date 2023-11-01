<template>
	<router-view></router-view>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch('actions_times_carregar')
		this.$store.dispatch('actions_jogadores_carregar')
	}
}
</script>

<style>

</style>