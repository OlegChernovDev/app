<template>
	<div>
		<div class="row flex-spaces tabs">
			<input id="tab1" type="radio" name="tabs" checked />
			<label for="tab1">Аренда</label>

			<input id="tab2" type="radio" name="tabs" />
			<label for="tab2">Выкуп</label>

			<input id="tab3" type="radio" name="tabs" />
			<label for="tab3">Сбережения</label>

			<div class="content" id="content1">
				<table>
					<thead>
						<tr>
							<th>Название</th>
							<th>в мес.</th>
							<th>Цена</th>
							<th>Доход</th>
							<th>Кол-во.</th>
							<th>#</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in $store.state.shop.rent"
							:key="item.id"
						>
							<td>{{ item.name }}</td>
							<td>{{ item.expenses }}</td>
							<td>{{ item.cost }}</td>
							<td>{{ item.income }}</td>
							<td>{{ item.count }}</td>
							<td>
								<button
									@click="$store.commit('shop/buy', item.id)"
									v-if="$store.state.shop.money >= item.cost"
								>
									Купить
								</button>
								<button disabled v-else>Купить</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="content" id="content2">
				<p>Покупка недвижимости</p>
			</div>
			<div class="content" id="content3">
				<p>Инвестиции в различные компании</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Shop",
	methods: {
		test() {
			this.$store.commit("shop/increment");
		},
	},
};
</script>
<style scoped>
[popover-top] {
	margin: 0px;
}

.return {
	width: 150px;
}
</style>
