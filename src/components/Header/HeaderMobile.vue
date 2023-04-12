<script setup>
import Icon from '../Icon.vue';

import { useStore } from 'vuex';
const store = useStore();
</script>


<template>
	<div class="md:hidden z-20 w-full h-12 sticky top-0 flex bg-white">
		<div class="flex">
			<Icon
				:w="50" :h="50"
				@click="store.dispatch('openModal', { type: 'location', params: {} })"
			>
				<img src="../../assets/icons/menu.svg" class="w-[25px]" />
			</Icon>
			<Icon :w="50" :h="50"></Icon>
		</div>

		<div class="flex-grow flex justify-center items-center">
			Мама Sous
		</div>

		<div class="flex">
			<Icon
				:w="50" :h="50"
				@click="store.dispatch('openModal', { type: 'location', params: {} })"
			>
				<img src="../../assets/icons/info.svg" class="w-[25px]" />
			</Icon>
			<Icon
				:w="50" :h="50"
				@click="store.dispatch('openModal', { type: 'location', params: {} })"
			>
				<img src="../../assets/icons/search2.svg" class="w-[25px]" />
			</Icon>
		</div>
	</div>

	<div class="sm:px-5 md:hidden w-full h-[40px] mb-[10px] mt-[5px] px-2 block">
		<div class="h-full rounded-lg bg-[#eaeaea] relative">
			<div class="w-1/2 h-full absolute">
				<div
					class="w-full h-full rounded-lg bg-[#3D3D3D] shadow-md transition-all duration-500"
					:class="{'translate-x-full': !store.state.delivery}"
				></div>
			</div>
			<div class="z-10 h-full relative flex text-[17px] leading-[17px]">
				<div
					@click="store.dispatch('setDelivery', true)"
					class="flex-auto flex items-center justify-center cursor-default transition-all hover:opacity-100"
					:class="{'cursor-pointer opacity-70': !store.state.delivery, 'opacity-100 text-white': store.state.delivery}"
				>Доставка</div>
				<div
					@click="store.dispatch('setDelivery', false)"
					class="flex-auto flex items-center justify-center cursor-default transition-all hover:opacity-100"
					:class="{'cursor-pointer opacity-70': store.state.delivery, 'opacity-100 text-white': !store.state.delivery}"
				>Самовывоз</div>
			</div>
		</div>
	</div>

	<div class="md:hidden w-full m-[5px] block text-center text-[14px] leading-[16px] sf-pro-display-light">
		Пр-т Дружбы Народов, 4 →
	</div>
</template>


<style scoped>
</style>
