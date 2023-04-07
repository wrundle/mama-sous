<script setup>
defineProps({
	message: String
});
</script>


<template>
	<div class="
		mr-[25px] pb-[10px] text-[22px] inline-block font-semibold cursor-pointer underline-offset-2 decoration-[3px]
		active:underline active:text-[#FF0000] hover:text-[#FF0000]
	">{{ message }}</div>
</template>


<style scoped>
</style>
