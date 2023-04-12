<script setup>
defineProps({
	text: String,
	label: String
});
</script>


<template>
	<span class="
		lg:my-[5px] relative text-[17px] text-[#0085FF] leading-[20px] whitespace-nowrap transition-all cursor-pointer
		underline underline-offset-2 decoration-blue-200 hover:decoration-blue-500 sf-pro-display-light
	">
		<span
			v-if="label"
			class="absolute -top-5 text-[13px] text-neutral-400"
		>
			{{ label }}
		</span>
		{{ text }}
	</span>
</template>


<style scoped>
</style>
