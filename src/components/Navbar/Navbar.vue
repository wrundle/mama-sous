<script setup>
import NavbarButton from './NavbarButton.vue';
import { ref, onMounted } from 'vue'

const props = defineProps({
	sections: Array
});

const isPinned = ref(false);

onMounted(() => {
	const observer = new IntersectionObserver(([e]) => {
		// e.target.classList.toggle("text-red-500", e.intersectionRatio < 1);
		isPinned.value = e.intersectionRatio < 1;
	}, { threshold: [1] });
	observer.observe(document.querySelector("#navbar"));
});
</script>


<template>
	<div
		id="navbar"
		class="mt-[35px] mb-[30px] sticky -top-[1px] z-10 border-b transition-all bg-white bg-opacity-80 backdrop-blur"
		:class="{
			'h-[52px]': !isPinned,
			'h-[60px] flash': isPinned
		}"
	>
		<NavbarButton
			v-for="section in sections"
			:key="sections"
			:message="section"
			:isPinned="isPinned"
		/>
	</div>
</template>


<style scoped>
.flash {
	animation-name: flash;
	animation-duration: 200ms;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	-webkit-animation-name: flash;
    -webkit-animation-duration: 200ms;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in;
}

@keyframes flash {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>
