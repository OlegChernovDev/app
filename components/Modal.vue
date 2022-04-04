<template>
	<div>
		<input class="modal-state" type="checkbox" v-model="visible"/>
		<div class="modal">
			<label class="modal-bg"></label>
			<div class="modal-body">
				<label class="btn-close" @click="close">X</label>
				<h4 class="modal-title">{{ title }}</h4>
				<p class="modal-text">
					<slot></slot>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	props: ['title'],
	data() {
		return {
			visible: false
		}
	},
	methods: {
		open() {
			this.visible = true;
		},
		close() {
			this.visible = false;
		}
	}
}
</script>
<style scoped>
.modal-body {
	width: 80%;
}

.modal-text {
	display: block;
	max-height: 400px;
	overflow: auto;
}

@media (max-width: 640px) {
	.modal-body {
		width: 100%;
		height: 100%;
	}
	.modal-text {
		display: block;
		max-height: 95%;
		overflow: auto;
	}
}
</style>
