<script setup>
import store from '../../store';
import { computed } from 'vue';

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
	return output.substring(0, output.length - 2);
});

const totalPrice = computed(() => {
	let output = parseInt(props.price.split('\xa0')[0]);
	for (const key in props.options) {
		output += parseInt(props.options[key].price.split('\xa0')[0]);
	};
	return output * props.amount;
});

const changeAmount = (value) => {
	store.dispatch('changeAmount', {
		id: props.id,
		value: value
	});
};
</script>


<template>
	<div class="w-full mt-3 flex flex-row text-[15px] leading-[17px] sf-pro-display-light">
		<div class="flex-grow">
			<span>{{ name }}</span><span>{{ ' ' }}</span>
			<span class="opacity-40">{{ formattedOptions }}</span><span>{{ ' ' }}</span>
			<span class="opacity-40 mt-1 text-[12px] leading-[14px]">{{ size }}</span>
		</div>

		<div class="
			h-[24px] flex flex-row rounded-md transition-all bg-black bg-opacity-0
			hover:bg-opacity-75 hover:text-white
		">
			<div
				@click="changeAmount(-1)"
				class="group w-[20px] flex items-center justify-center relative cursor-pointer"
			>
				<div class="
					w-[10px] h-[2px] absolute top-[11px] left-[5px] opacity-80 transition-all
					bg-neutral-100 group-hover:bg-white group-hover:opacity-100
				"></div>
			</div>
			<div class="w-[20px] flex items-center justify-center cursor-default">
				<span class="text-[13px] leading-[24px] sf-pro-display-medium">{{ amount }}</span>
			</div>
			<div
				@click="changeAmount(1)"
				class="group w-[20px] flex items-center justify-center relative cursor-pointer"
			>
				<div class="
					w-[10px] h-[2px] absolute top-[11px] left-[5px] opacity-80 transition-all
					bg-neutral-100 group-hover:bg-white group-hover:opacity-100
				"></div>
				<div class="
					w-[2px] h-[10px] absolute top-[7px] left-[9px] opacity-80 transition-all
					bg-neutral-100 group-hover:bg-white group-hover:opacity-100
				"></div>
			</div>
		</div>

		<div class="w-[55px] shrink-0 text-right text-[13px] leading-[17px] cursor-default sf-pro-display-medium">
			{{ totalPrice }} ₽
		</div>
	</div>
</template>


<style scoped>
</style>
