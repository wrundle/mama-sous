<script setup>
defineProps({
	message: String,
	isPinned: Boolean
});
</script>


<template>
	<div
		class="
			mr-[25px] inline-flex items-center text-[22px] hover:text-[#FF0000] leading-[26px] cursor-pointer
			underline-offset-2 decoration-[3px] sf-pro-display-semibold
		"
		:class="{
			'h-full': isPinned,
		}"
	>{{ message }}</div>
</template>


<style scoped>
</style>
