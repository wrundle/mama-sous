<script setup>
import { ref, computed, onMounted } from 'vue';
import CartButtons from './CartButtons.vue';
import CartItem from './CartItem.vue';
import { useStore } from 'vuex';

const store = useStore();

const isPinned = ref(false);

const clearCart = () => confirm('Очистить корзину?') ? store.dispatch('clearCart') : {};

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

onMounted(() => {
	const observer = new IntersectionObserver(([e]) => {
		// e.target.classList.toggle("text-red-500", e.intersectionRatio < 1);
		isPinned.value = e.intersectionRatio < 1;
	}, { threshold: [1] });
	observer.observe(document.querySelector("#cart-container"));
});
</script>


<template>
	<div
		id="cart-container"
		class="lg:pl-8 md:flex h-screen pl-2 pb-[15px] sticky top-0 hidden transition-all"
		:class="{
			'lg:pt-[75px]': !isPinned
		}"
	>
		<div
			class="
				lg:shadow-none xl:m-0 lg:mt-0 w-[290px] h-full flex flex-col relative rounded-lg bg-[#F1F1F1] shadow-xl
			"
			:class="{ 'mt-[50px]': !isPinned }"
		>

			<div class="px-[17px] pt-[15px] mb-[12px] flex flex-row">
				<div class="flex-grow cursor-default text-[25px] leading-[30px] sf-pro-display-heavy">Мой заказ</div>
				<div
					v-if="Object.entries(store.state.cart).length > 0"
					@click="clearCart"
					class="
						flex items-center justify-center cursor-pointer opacity-30 hover:opacity-100 transition-all
						duration-300
					"
				>
					<img
						src="@assets/icons/trash.svg"
						class="h-[25px]"
					/>
				</div>
			</div>

			<CartButtons />

			<div class="h-[19px] mb-[10px] bg-[#ffea6b]"></div>

			<div class="px-[17px] py-[10px] text-[15px] leading-[17px] flex flex-row justify-between sf-pro-display-light">
				<div>
					<span v-if="store.state.delivery">Доставка по адресу</span>
					<span v-else>Адрес самовывоза</span>
					<div class="
						mt-[2px] underline underline-offset-2 decoration-blue-200 hover:decoration-blue-500
						transition-all cursor-pointer text-[#0085FF]
					">
						Пр-т Дружбы Народов, 4
					</div>
					<div
						v-if="totalPrice < 700  && store.state.delivery"
						class="opacity-40 mt-[5px] -mb-[5px] text-[13px]"
					>
						Закажите ещё на {{ 700 - totalPrice }} ₽ для бесплатной доставки
					</div>
				</div>
				<div class="shrink-0 text-right text-[13px] leading-[17px] cursor-default sf-pro-display-medium">
					<span v-if="store.state.delivery">{{ totalPrice > 700 ? 0 : 150 }} ₽</span>
				</div>
			</div>

			<div class="flex-grow px-[17px] overflow-auto">
				<CartItem
					v-for="(value, key) in store.state.cart"
					:key="key"
					:id="key"
					:name="value.name"
					:size="value.size"
					:price="value.price"
					:amount="value.amount"
					:options="value.options"
				/>
			</div>

			<div
				v-if="Object.entries(store.state.cart).length > 0"
				class="w-full p-[10px] sticky bottom-0 bg-neutral-100"
				:class="{'fixed shadow': isPinned}"
			>
				<div class="flex justify-between cursor-default">
					<span class="mx-[7px] mb-[10px] text-[17px] leading-[23px]">К оплате</span>
					<span class="mx-[7px] mb-[10px] text-[16px] leading-[23px] sf-pro-display-medium">
						{{ totalPrice < 700 && store.state.delivery ? totalPrice + 150 : totalPrice }} ₽
					</span>
				</div>
				<div
					@click=""
					class="
						z-50 text-[20px] leading-[46px] text-center rounded-lg
						cursor-pointer transition-all duration-200 bg-[#1dbf73] hover:bg-[#1a944b]
						text-white active:scale-95 sf-pro-display-medium
					"
				>
					Оформить заказ
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
.shadow {
	box-shadow: 0 -2px 12px -10px rgba(0,0,0,.9);
}
</style>
