export const state = () => ({
	counter: 0,
	money: 100,
	income: 0,
	expenses: 0,
	rent: [{
			id: 0,
			count: 0,
			name: 'Овощной ларёк',
			income: 11,
			cost: 20,
			expenses: 10
		},
		{
			id: 1,
			count: 0,
			name: 'Магазин одежды',
			income: 21,
			cost: 40,
			expenses: 20
		}
	]
});

export const mutations = {
	buy(state, id) {
		state.rent.forEach(item => {
			if(item.id == id && state.money >= item.expenses) {
				state.rent[id].count++;
				state.money -= state.rent[id].cost;
				state.expenses += state.rent[id].expenses;
				state.income += state.rent[id].income;
			}
		});
	},
	tik(state) {
		state.money += state.income - state.expenses;
	},
	increment(state) {
		state.counter++;
	}
}
