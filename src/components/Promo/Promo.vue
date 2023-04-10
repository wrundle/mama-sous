<script setup>
import PromoCard from './PromoCard.vue';
import { onMounted } from 'vue';


let pos = { left: 0, x: 0 };


const scrollHandler = () => {};

const mouseDownHandler = function (e) {
	const el = document.getElementById('promo-container');
	pos = { left: el.scrollLeft, x: e.clientX };
	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);
	el.style.userSelect = 'none';
	el.style.cursor = 'grabbing';
};

const mouseUpHandler = function () {
	const el = document.getElementById('promo-container');
	document.removeEventListener('mousemove', mouseMoveHandler);
	document.removeEventListener('mouseup', mouseUpHandler);
	el.style.removeProperty('user-select');
	el.style.cursor = 'grab';
};

const mouseMoveHandler = function (e) {
	const el = document.getElementById('promo-container');
	const dx = e.clientX - pos.x;
	el.scrollLeft = pos.left - dx / 1.5;
};


onMounted(() => {
	document.getElementById('promo-container').addEventListener('mousedown', mouseDownHandler);
})
</script>


<template>
	<div
		id="promo-container"
		v-on:scroll="scrollHandler"
		class="
			flex flex-nowrap overflow-x-scroll overscroll-x-auto cursor-grab
			hide-scrollbar fade-to-right
		"
	>
		<PromoCard imageName="1.webp" />
		<PromoCard imageName="2.webp" />
		<PromoCard imageName="1.webp" />
		<PromoCard imageName="2.webp" />
		<PromoCard imageName="1.webp" />
		<PromoCard imageName="2.webp" />
	</div>
</template>


<style scoped>
.hide-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
	display: none;
}

.fade-to-right {
	-webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
	mask-image: linear-gradient(to right, black 80%, transparent 100%);
}
</style>
