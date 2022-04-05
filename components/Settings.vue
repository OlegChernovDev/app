<template>
	<div>
		<div class="row">
			<div class="collapsible">
				<input id="collapsible1" type="checkbox" name="collapsible" />
				<label for="collapsible1">Аккаунт</label>
				<div class="collapsible-body">
					<span
						>Bacon ipsum dolor sit amet landjaeger sausage brisket,
						jerky drumstick fatback boudin ball tip
						turducken...</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Settings",
	methods: {
		test() {
			this.$store.commit("settings/increment");
		},
	},
};
</script>
<style scoped>
</style>
