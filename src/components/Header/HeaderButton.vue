<script setup>
defineProps({
	message: String
});
</script>


<template>
	<span class="
		mr-[30px] text-[17px] whitespace-nowrap transition-all cursor-pointer text-[#0085FF]
		underline underline-offset-2 decoration-blue-200 hover:decoration-blue-500 sf-pro-display-light
	">{{ message }}</span>
</template>


<style scoped>
</style>
