<template>
	<div>
		<div class="row flex-spaces tabs">
			<input id="tab1" type="radio" name="tabs" checked />
			<label for="tab1">Аренда</label>

			<input id="tab2" type="radio" name="tabs" />
			<label for="tab2">Покупка</label>

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
							<td data-label="Название">{{ item.name }}</td>
							<td data-label="В мес.">{{ item.expenses }}</td>
							<td data-label="Цена">{{ item.cost }}</td>
							<td data-label="Доход">{{ item.income }}</td>
							<td data-label="Кол-во.">{{ item.count }}</td>
							<td>
								<button
									class="buy_rent"
									@click="$store.commit('shop/buy_rent', item.id)"
									v-if="$store.state.shop.money >= item.cost"
								>
									Купить
								</button>
								<button class="buy" disabled v-else>Купить</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="content" id="content2">
				<table>
					<thead>
						<tr>
							<th>Название</th>
							<th>Цена</th>
							<th>Доход</th>
							<th>Кол-во.</th>
							<th>#</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in $store.state.shop.buy"
							:key="item.id"
						>
							<td data-label="Название">{{ item.name }}</td>
							<td data-label="Цена">{{ item.cost }}</td>
							<td data-label="Доход">{{ item.income }}</td>
							<td data-label="Кол-во.">{{ item.count }}</td>
							<td>
								<button
									class="buy"
									@click="$store.commit('shop/buy', item.id)"
									v-if="$store.state.shop.money >= item.cost"
								>
									Купить
								</button>
								<button class="buy" disabled v-else>Купить</button>
							</td>
						</tr>
					</tbody>
				</table>
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

table {

  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {

  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media (max-width: 840px) {
  table {
    border: 0;
  }

.buy {
	width: 100%;
}
  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;

    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {

    display: block;
    margin-bottom: .625em;
  }

  table td {
    display: block;
    font-size: .9em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
