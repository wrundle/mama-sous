<script setup>
import PromoCard from './PromoCard.vue';
import { ref, onMounted } from 'vue';

const scrollModifier = ref(2);

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

	el.classList.add('transition-all', 'duration-300');
	el.style.transform = 'translate(0px, 0px)';
	setTimeout(() => {
		el.classList.remove('transition-all', 'duration-300');
		scrollModifier.value = 2
	}, 250);
};

const mouseMoveHandler = function (e) {
	const el = document.getElementById('promo-container');
	const dx = e.clientX - pos.x;
	if (pos.left - dx / scrollModifier.value > 0) {
		el.scrollLeft = pos.left - dx / scrollModifier.value;
		el.style.transform = `translateX(${pos.left + dx / scrollModifier.value}px)`;
		scrollModifier.value += 0.005;
	} else {
		el.scrollLeft = pos.left - dx / scrollModifier.value;
		el.style.transform = `translateX(${pos.left + dx / scrollModifier.value}px)`;
		scrollModifier.value += 0.005;
	};
};


onMounted(() => {
	document.getElementById('promo-container').addEventListener('mousedown', mouseDownHandler);
})
</script>


<template>
	<div class="overflow-hidden">
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
		</div>
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

/* .fade-to-right {
	-webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
	mask-image: linear-gradient(to right, black 80%, transparent 100%);
} */
</style>
