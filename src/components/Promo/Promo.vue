<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

const getImageUrl = (name) => {
	return new URL(`../../assets/promo/${name}.webp`, import.meta.url).href;
};

const scrollModifier = ref(2);
const isMoved = ref(false);

let pos = { left: 0, x: 0 };

const scrollHandler = () => {};

const mouseDownHandler = function (e) {
	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);
	const el = document.getElementById('promo-container');
	el.style.userSelect = 'none';
	el.style.cursor = 'grabbing';
	pos = { left: el.scrollLeft, x: e.clientX };
};

const mouseUpHandler = function () {
	document.removeEventListener('mousemove', mouseMoveHandler);
	document.removeEventListener('mouseup', mouseUpHandler);
	const el = document.getElementById('promo-container');
	el.style.removeProperty('user-select');
	el.style.cursor = 'grab';

	el.classList.add('transition-all', 'duration-300');
	el.style.transform = 'translate(0px, 0px)';
	setTimeout(() => {
		el.classList.remove('transition-all', 'duration-300');
		scrollModifier.value = 2
		isMoved.value = false
	}, 250);
};

const mouseMoveHandler = function (e) {
	const el = document.getElementById('promo-container');
	const dx = e.clientX - pos.x;
	el.scrollLeft = pos.left - dx / scrollModifier.value;
	el.style.transform = `translateX(${pos.left + dx / scrollModifier.value}px)`;
	scrollModifier.value += 0.005;
	isMoved.value = true;
};

onMounted(() => document.getElementById('promo-container').addEventListener('mousedown', mouseDownHandler));
</script>


<template>
	<div class="overflow-hidden">
		<div
			id="promo-container"
			v-on:scroll="scrollHandler"
			class="flex flex-nowrap overflow-x-scroll overscroll-x-auto cursor-grab hide-scrollbar"
		>
			<img
				v-for="index in store.state.promoCount"
				:src="getImageUrl(index)"
				@click="store.dispatch('openModal', { type: 'promo', params: {id: index} })"
				class="w-[367px] h-[164px] mr-5 object-contain rounded-lg not-draggable"
				:class="{ 'pointer-events-none': isMoved }"
			/>
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

.not-draggable {
    -webkit-user-drag: none;
	/* user-drag: none; */
}

/* .fade-to-right {
	-webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
	mask-image: linear-gradient(to right, black 80%, transparent 100%);
} */
</style>
