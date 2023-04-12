<script setup>
import CartButtons from '../Cart/CartButtons.vue';
import ModalCartItem from './ModalCartItem.vue';
import BtnClose from '../BtnClose.vue';
import Modal from './Modal.vue';

import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const amount = ref(1);

const clearCart = () => {
	confirm('Очистить корзину?') ? store.dispatch('clearCart') : {};
	store.dispatch('closeModal');
};

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
	<Modal>
		<div class="sm:max-w-[350px] sm:mt-6 w-full h-full">
			<div class="sm:h-max sm:min-h-0 z-30 w-full min-h-full relative rounded-lg cursor-default bg-white">

				<BtnClose />

				<div
					v-if="Object.entries(store.state.cart).length > 0"
					@click="clearCart"
					class="
						w-[27px] h-[27px] absolute top-[12px] right-[54px] flex items-center justify-center
						cursor-pointer opacity-30 hover:opacity-100 transition-all duration-300
					"
				>
					<img
						src="@assets/icons/trash.svg"
						class="h-[25px]"
					/>
				</div>

				<div class="text-[18px] leading-[55px] text-center">
					Корзина
				</div>

				<CartButtons />

				<ModalCartItem
					v-for="(value, key) in store.state.cart"
					:key="key"
					:id="key"
					:name="value.name"
					:size="value.size"
					:image="value.image"
					:price="value.price"
					:amount="value.amount"
					:options="value.options"
					:description="value.description"
				/>

				<div class="
					mx-[10px] px-[7px] py-[20px] flex justify-between text-[17px] leading-[17px border-t
				">
					<div>Промокод</div>
					<div class="text-green-600">Ввести промокод</div>
				</div>

				<div class="
					mx-[10px] px-[7px] py-[20px] flex text-[17px] leading-[17px border-t
				">
					<div class="flex-grow">Укажите количество персон</div>
					<div class="h-[44px] flex flex-row">
						<div
							@click="amount -= 1"
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
							@click="amount += 1"
							class="
								group w-[44px] flex items-center justify-center relative rounded-lg
								transition-all active:scale-95 bg-[#F4F3EF] hover:bg-[#3D3D3D] cursor-pointer
							"
						>
							<div class="w-[16px] h-[2px] absolute top-[21px] left-[14px] bg-black group-hover:bg-white"></div>
							<div class="w-[2px] h-[16px] absolute top-[14px] left-[21px] bg-black group-hover:bg-white"></div>
						</div>
					</div>
				</div>

				<div class="z-40 w-full p-[10px] sticky bottom-0 rounded-lg select-none bg-white">
					<div class="flex justify-between cursor-default">
						<span class="mx-[7px] mb-[10px] text-[17px] leading-[23px]">Итого</span>
						<span class="mx-[7px] mb-[10px] text-[16px] leading-[23px] sf-pro-display-medium">
							{{ totalPrice < 700 && store.state.delivery ? totalPrice + 150 : totalPrice }} ₽
						</span>
					</div>
					<div
						@click=""
						class="
							z-50 w-full text-[18px] leading-[44px] text-center rounded-lg
							cursor-pointer transition-all duration-200 bg-[#2DC36A] hover:bg-[#1A944B]
							text-white active:scale-95 sf-pro-display-medium
						"
					>
						Заказать
					</div>
				</div>

			</div>
		</div>
	</Modal>
</template>


<style scoped>
</style>
