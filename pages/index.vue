<template>
	<div class="paper container container-sm margin-bottom-large">
		<Modal title="Рынок" ref="shop">
			<Shop></Shop>
		</Modal>

		<Modal title="Настройки" ref="settings">
			<Settings></Settings>
		</Modal>

		<div class="progress margin-bottom">
			<div :class="`bar w-${Math.floor(money / progress_coef)}`"></div>
		</div>

		<VueSlickCarousel v-bind="settings" ref="carousel">
			<div class="swipe-block">
				<p>Деньги - {{ money }}</p>
				<p>Расход - {{ expenses }} Доход - {{ income }}</p>
				<p>
					Доходность
					<span class="badge" v-if="income - expenses == 0">{{
						profit
					}}</span>
					<span
						class="badge danger"
						v-else-if="income - expenses < 0"
						>{{ profit }}</span
					>
					<span
						class="badge success"
						v-else-if="income - expenses > 0"
						>{{ profit }}</span
					>
				</p>
			</div>
			<div class="swipe-block">2</div>
			<div class="swipe-block">3</div>
			<div class="swipe-block">4</div>
		</VueSlickCarousel>

		<div class="row flex-center">
			<div class="col col-6">
				<button class="right" @click="$refs.carousel.prev()">
					<
				</button>
			</div>
			<div class="col col-6">
				<button class="" @click="$refs.carousel.next()">></button>
			</div>

		</div>

		<button @click.prevent="click" id="create-post">Click</button>

		<div class="row menu">
			<div class="col col-4">
				<button class="paper-btn" @click="$refs.shop.open()">
					Рынок
				</button>
			</div>
			<div class="col col-4">
				<button class="paper-btn" @click="test">Настройки</button>
			</div>
			<div class="col col-4">
				<button class="paper-btn" @click="$refs.settings.open()">
					Настройки
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Shop from "../components/Shop.vue";
import { mapState } from "vuex";
import Settings from "../components/Settings.vue";

import VueSlickCarousel from "../node_modules/vue-slick-carousel";
import "../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css";

//import Driver from '../node_modules/driver.js/dist/driver.min.js';
//import '../node_modules/driver.js/dist/driver.min.css';

export default {
	name: "IndexPage",
	data() {
		return {
			//driver: new Driver(),
			settings: {
				dots: false,
				swipeToSlide: true,
				dotsClass: "slick-dots custom-dot-class",
				edgeFriction: 0.35,
				infinite: false,
				speed: 400,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		};
	},
	methods: {
		click() {
			//this.driver.highlight('#create-post');
			this.$store.commit("shop/click");
		},
		test() {
			alert(this.$store.state.test);
			fetch("http://localhost:3000/getCourses").then((res) =>
				console.log(res)
			);
		},
		tik() {
			setInterval(() => {
				this.$store.commit("shop/tik");
				console.log("tik");
			}, 5000);
		},
	},
	components: { Modal, Shop, Settings, VueSlickCarousel },
	computed: {
		profit() {
			//доходность
			return (
				this.$store.state.shop.income - this.$store.state.shop.expenses
			);
		},
		...mapState("shop", ["money", "income", "expenses", "progress_coef"]),
	},
	mounted() {
		this.tik();


	},
};
</script>
<style scoped>
.right {
	float: right;
}
.paper-btn {
	width: 100%;
}
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

	.container {
		width: 100%;
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
