<template>
	<div>
{{ $store.state.shop.counter }}
		<table>
			<thead>
				<tr>
					<th>Название</th>
					<th>Цена</th>
					<th>#</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in 20" :key="item">
					<td>Предмет</td>
					<td>58,66</td>
					<td>
						<button @click="test">Купить</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'Shop',
	methods: {
		test() {
			this.$store.commit("shop/increment");
		},
	},
};
</script>
