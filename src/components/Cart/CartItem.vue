<script setup>
import { computed } from 'vue'

const props = defineProps({
	id: String,
	name: String,
	size: String,
	price: String,
	amount: Number,
	options: Object
});

const formattedOptions = computed(() => {
	let output = '';
	for (const key in props.options) {
		output += props.options[key].amount > 1 ? `${key} (${props.options[key].amount}), ` : `${key}, `
	}
	return output;
});

const totalPrice = computed(() => {
	let output = parseInt(props.price.split('\xa0')[0]);
	for (const key in props.options) {
		output += parseInt(props.options[key].price.split('\xa0')[0]);
	}
	return output;
});
</script>


<template>
	<div class="w-full flex flex-row text-[15px] leading-[17px] sf-pro-display-light">
		<div class="flex-grow flex flex-col">
			<span>{{ name }}</span>
			<span class="opacity-40">{{ formattedOptions }}</span>
			<span class="opacity-40 mt-1 text-[12px] leading-[14px]">{{ size }}</span>
		</div>

		<div class="h-[24px] flex flex-row">
			<div class="w-[20px] flex items-center justify-center relative">
				<div class="w-[10px] h-[2px] absolute top-[9px] left-[5px] bg-black"></div>
			</div>
			<div class="w-[20px] flex items-center justify-center">
				<span class="text-[13px] leading-[24px]">1</span>
			</div>
			<div class="w-[20px] flex items-center justify-center relative">
				<div class="w-[10px] h-[2px] absolute top-[9px] left-[5px] bg-black"></div>
				<div class="w-[2px] h-[10px] absolute top-[5px] left-[9px] bg-black"></div>
			</div>
		</div>

		<div class="w-[55px] shrink-0 text-right text-[13px] leading-[17px] sf-pro-display-medium">
			{{ totalPrice }} ₽
		</div>
	</div>
</template>


<style scoped>
</style>
