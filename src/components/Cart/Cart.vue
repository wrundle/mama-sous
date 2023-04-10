<script setup>
import CartButtons from './CartButtons.vue';
import CartItem from './CartItem.vue';
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const isPinned = ref(false);

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
		class="w-[292px] h-screen pb-[15px] sticky top-0 transition-all"
		:class="{
			'pt-[75px]': !isPinned
		}"
	>
		<div class="h-full flex flex-col relative rounded-lg bg-neutral-100">

			<div class="px-[17px] pt-[15px] pb-[5px] flex flex-row">
				<div class="flex-grow cursor-default text-[25px] leading-[30px] sf-pro-display-heavy">Мой заказ</div>
				<div class="
					flex items-center justify-center cursor-pointer
					opacity-30 hover:opacity-100 transition-all duration-300
				">
					<img
						src="@assets/icons/trash.svg"
						class="h-[25px]"
					/>
				</div>
			</div>

			<CartButtons />

			<div class="h-[19px] mb-[10px] bg-[#ffea6b]"></div>

			<div class="flex-grow py-[10px] px-[17px]">
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

			<div class="w-[292px] sticky bg-neutral-100 shadow">
				<div class="flex justify-between">
					<div>К оплате</div>
					<div>0</div>
				</div>
			</div>

		</div>
	</div>
</template>


<style scoped>
.shadow {
	box-shadow: 0 2px 14px rgba(0,0,0,.09);
}
</style>
