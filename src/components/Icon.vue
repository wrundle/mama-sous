<script setup>
const props = defineProps({
	w: Number,
	h: Number
});
</script>


<template>
	<div :class="`w-[${w}px] h-[${h}px] pr-[2px] flex items-center justify-center`"><slot></slot></div>
</template>


<style scoped>
</style>
