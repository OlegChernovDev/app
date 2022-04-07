export const state = () => ({
	counter: 0,
	money: 1,
	progress_coef: 1,
	income: 0,
	expenses: 0,
	rent: [{ //Аренда
			id: 0,
			count: 0,
			name: 'Передвижной пункт',
			income: 290,
			cost: 1000,
			expenses: 250
		},
		{
			id: 1,
			count: 0,
			name: 'Ларёк шаурмы',
			income: 650,
			cost: 20000,
			expenses: 500
		}
	],
	buy: [	//покупка
		{
			id: 0,
			count: 0,
			name: 'ресторан на окраине',
			income: 5000,
			cost: 800000
		},
		{
			id: 1,
			count: 0,
			name: 'ресторан в центре',
			income: 10000,
			cost: 15000000
		},
		{
			id: 2,
			count: 0,
			name: 'Ресотран в другом городе',
			income: 35000,
			cost: 17000000
		},
		{
			id: 3,
			count: 0,
			name: 'Сеть ресторанов',
			income: 5000,
			cost: 150000000
		},
		{
			id: 4,
			count: 0,
			name: 'Ресторан в другой стране',
			income: 5000,
			cost: 800000000
		},
		{
			id: 5,
			count: 0,
			name: 'Сеть ресторанов в другой стране',
			income: 5000,
			cost: 5000000000
		},
	]
});

export const mutations = {
	buy_rent(state, id) {
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
	click(state) {
		state.money += 1;

	},
	increment(state) {
		state.counter++;
	}
}
