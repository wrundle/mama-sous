<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>


<template>
	<div class="h-[40px] mx-[10px] mb-[10px] rounded-lg bg-[#eaeaea] relative">
		<div class="w-1/2 h-full py-[3px] absolute">
			<div
				class="w-full h-full rounded-lg bg-white shadow-md transition-all duration-500"
				:class="{'translate-x-full': !store.state.delivery}"
			></div>
		</div>
		<div class="z-10 h-full relative flex text-[16px] leading-[16px] sf-pro-display-light">
			<div
				@click="store.dispatch('setDelivery', true)"
				class="flex-auto flex items-center justify-center cursor-default transition-all hover:opacity-100"
				:class="{'cursor-pointer opacity-70': !store.state.delivery, 'opacity-100': store.state.delivery}"
			>Доставка</div>
			<div
				@click="store.dispatch('setDelivery', false)"
				class="flex-auto flex items-center justify-center cursor-default transition-all hover:opacity-100"
				:class="{'cursor-pointer opacity-70': store.state.delivery, 'opacity-100': !store.state.delivery}"
			>Самовывоз</div>
		</div>
	</div>
</template>


<style scoped>
</style>
