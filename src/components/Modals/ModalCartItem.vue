<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const props = defineProps({
	id: String,
	name: String,
	size: String,
	image: String,
	price: String,
	amount: Number,
	options: Object,
	description: String
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
	<div class="mx-[10px] pl-[96px] pr-[7px] py-[20px] relative text-[17px] leading-[17px]">

		<img
			:src="image"
			class="w-[75px] absolute left-[5px] top-[20px] aspect-square object-cover rounded-lg"
		/>

		<div>
			<span>{{ name }}</span><span>{{ ' ' }}</span>
			<span class="opacity-40">{{ formattedOptions }}</span><span>{{ ' ' }}</span>
			<span class="opacity-40 text-[13px] leading-[13px]">{{ size }}</span><span>{{ ' ' }}</span>
			<div class="opacity-40 mt-[5px] text-[15px] leading-[19px] text-ellipsis overflow-hidden line-clamp-2">{{ description }}</div>
		</div>

		<div class="mt-[15px] flex justify-between">
			<div class="h-[44px] flex flex-row">
				<div
					@click="changeAmount(-1)"
					class="
						group w-[44px] flex items-center justify-center relative rounded-lg
						transition-all active:scale-95 bg-[#F4F3EF] hover:bg-[#3D3D3D] cursor-pointer
					"
				>
					<div class="w-[16px] h-[2px] absolute top-[21px] left-[14px] bg-black group-hover:bg-white"></div>
				</div>

				<div class="w-[44px] flex items-center justify-center">
					<span class="text-[18px] leading-[44px]">{{ amount }}</span>
				</div>

				<div
					@click="changeAmount(1)"
					class="
						group w-[44px] flex items-center justify-center relative rounded-lg
						transition-all active:scale-95 bg-[#F4F3EF] hover:bg-[#3D3D3D] cursor-pointer
					"
				>
					<div class="w-[16px] h-[2px] absolute top-[21px] left-[14px] bg-black group-hover:bg-white"></div>
					<div class="w-[2px] h-[16px] absolute top-[14px] left-[21px] bg-black group-hover:bg-white"></div>
				</div>
			</div>

			<div class="shrink-0 flex items-center text-right text-[16px] leading-[17px] cursor-default">
				{{ totalPrice }} ₽
			</div>
		</div>

	</div>
</template>


<style scoped>
</style>
