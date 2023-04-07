<script setup>
defineProps({
	message: String
});
</script>


<template>
	<div class="
		mr-[25px] mb-[10px] text-[22px] inline-block cursor-pointer underline-offset-2 decoration-[3px]
		active:underline active:text-[#FF0000] hover:text-[#FF0000] sf-pro-display-semibold
	">{{ message }}</div>
</template>


<style scoped>
.sf-pro-display-semibold {
	font-family: SF-Pro-Display-Semibold;
}
</style>
