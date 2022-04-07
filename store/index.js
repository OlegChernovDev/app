export const state = () => ({
	test: 1
});

export const mutations = {
	test(state) {
		state.test++;
		console.log('STATE TEST')
	}
}
