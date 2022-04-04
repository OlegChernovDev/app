<template>
	<div class="paper container container-sm margin-bottom-large">
		<Modal title="Рынок" ref="shop">
			<Shop></Shop>
		</Modal>

		<div class="row menu">
			<div class="col col-4">
				<!--<button class="paper-btn" @click="$refs.shop.open()">
					Рынок
				</button>-->
				<div class="test">123</div>
			</div>
			<div class="col col-4">
				<div class="test">123</div>
			</div>
			<div class="col col-4">
<div class="test">123</div>
			</div>
		</div>
	</div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Shop from "../components/Shop.vue";
export default {
	name: "IndexPage",
	methods: {
		test() {
			fetch("http://localhost:3000/getCourses").then((res) =>
				console.log(res)
			);
		},
	},
	components: { Modal, Shop },
};
</script>
<style scoped>
.container {
	height: 100%;
}
.paper-btn {
	margin: 0px;
}
.row {
    justify-content: center;
}
.col {
	padding: 0px;
}
.test {
 margin-left: auto;
    margin-right: auto;
    width: 100%;
}
@media (max-width: 640px) {
	html,
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	.menu {
		position: fixed;
		bottom: 0;
		left: 50%;
		width: 640px;
		background: white;
		z-index: 10;
	}

}
@media (min-width: 320px) {
	.menu {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: white;
		z-index: 10;
		margin: 0;
		font-size: 0.9em;
	}
}
@media (min-width: 640px) {
	.menu {
		position: fixed;
		bottom: 0;
		left: 50%;
		width: 640px;
		background: white;
		z-index: 10;
		margin: 0 -320px;
		font-size: 0.9em;
	}
}
</style>
