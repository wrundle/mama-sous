<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const totalPrice = computed(() => {
	let output = 0;
	for (const foo in store.state.cart) {
		let price = parseInt(store.state.cart[foo].price.split('\xa0')[0]);
		for (const bar in store.state.cart[foo].options) {
			price += parseInt(store.state.cart[foo].options[bar].price.split('\xa0')[0]);
		};
		output += price * store.state.cart[foo].amount
	};
	return output;
});
</script>


<template>
	<div class="md:hidden z-20 w-full fixed bottom-0 left-0 flex justify-center">
		<div
			@click="store.dispatch('openModal', { type: 'cart', params: {} })"
			class="
				w-full m-[10px] px-[15px] flex justify-between text-[18px] leading-[50px] rounded-lg cursor-pointer
				transition-all duration-200 bg-[#1dbf73] text-white active:scale-95
			"
		>
			<div>
				<span>Мой заказ</span>
				<span class="ml-2 px-1 text-black bg-white">{{ Object.entries(store.state.cart).length }}</span>
			</div>
			<div>{{ totalPrice < 700 && store.state.delivery ? totalPrice + 150 : totalPrice }} ₽</div>
		</div>
	</div>
</template>


<style scoped>
</style>
