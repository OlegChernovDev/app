<template>
	<div class="container">
		<button @click="test">Test</button>
	</div>
</template>

<script>
export default {
	name: "IndexPage",
	methods: {
		test() {
			fetch("http://localhost:3000/getCourses").then((res) =>
				console.log(res)
			);
		},
	},
};
</script>
<style scoped>
.container {
	max-width: 640px;
	min-height: 100vh;
	padding: 50px 0;
	margin: 0 auto;
	box-shadow: 0 0 1px black;
	overflow: hidden;
}
</style>
