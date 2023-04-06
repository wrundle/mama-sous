<script setup>
defineProps({
	message: String
});
</script>


<template>
	<span class="
		mr-[30px] text-[17px] whitespace-nowrap transition-colors cursor-pointer text-sky-500
		underline underline-offset-2 decoration-blue-200 hover:decoration-blue-500
	">{{ message }}</span>
</template>


<style scoped>
</style>
