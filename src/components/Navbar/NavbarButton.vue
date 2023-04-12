<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const props = defineProps({
	message: String,
	isPinned: Boolean
});

const scroll = () => document.getElementById(`${props.message}-section`).scrollIntoView({ behavior: "smooth" });

const isActive = computed(() => {
	const obj = store.state.activeSection;
	const key = Object.keys(obj).length > 0 ? Object.keys(obj).reduce((acc, key) => obj[key] < obj[acc] ? key : acc) : '';
	return key == props.message;
});
</script>


<template>
	<div
		@click="scroll"
		class="
			xl:mr-[25px] xl:p-0 xl:text-[22px] lg:text-[20px] xl:leading-[26px] lg:hover:text-[#FF0000] lg:bg-opacity-0
			lg:decoration-[3px] lg:sf-pro-display-semibold px-2 text-[16px] leading-[32px] inline-flex items-center
			rounded-md cursor-pointer transition-all duration-400 underline-offset-2
		"
		:class="{
			'h-full': isPinned,
			'lg:text-[#FF0000] lg:underline bg-[#EBEBEB]': isActive
		}"
	>
		{{ message }}
	</div>
</template>


<style scoped>
</style>
