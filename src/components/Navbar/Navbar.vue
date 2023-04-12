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
		class="
			lg:mt-[35px] lg:mb-[30px] lg:p-0 lg:bg-opacity-80 lg:backdrop-blur z-10 w-full px-[10px] py-[7px] sticky -top-[1px]
			whitespace-nowrap overflow-auto border-b transition-all bg-white hide-scrollbar
		"
		:class="{
			'lg:h-[52px]': !isPinned,
			'lg:h-[60px] md:pt-[0px] pt-[48px] flash': isPinned
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
