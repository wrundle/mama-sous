<script setup>
import { useStore } from 'vuex';
const store = useStore();
defineProps({
	message: String,
	isPinned: Boolean
});
</script>


<template>
	<div
		class="
			mr-[25px] inline-flex items-center text-[22px] hover:text-[#FF0000] leading-[26px]
			transition-all duration-400 cursor-pointer underline-offset-2 decoration-[3px] sf-pro-display-semibold
		"
		:class="{
			'h-full': isPinned,
			'text-[#FF0000] underline': message == store.state.activeSection
		}"
	>{{ message }}</div>
</template>


<style scoped>
</style>
