<script setup>
import BtnClose from '../BtnClose.vue';
import Modal from './Modal.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const getImageUrl = (name) => {
	return new URL(`../../assets/promo/${name}.webp`, import.meta.url).href;
};

const store = useStore();
const modalID = computed(() => store.state.modal.params.id);
const setPromo = (e) => {
	store.dispatch('setPromo', { name: 'first', discount: 10 });
	store.dispatch('closeModal');
};
</script>


<template>
	<Modal>
		<div class="w-[350px] h-max relative rounded-lg cursor-default bg-white">

			<BtnClose />

			<div class="mx-8 p-5 text-[22px] leading-[20px] flex justify-center text-center sf-pro-display-heavy">
				<span v-if="modalID == 1">Скидка на первый заказ!</span><span v-else>Кэшбэк 3%!</span>
			</div>

			<img
				:src="getImageUrl(modalID)"
				class="w-full object-cover"
			/>

			<div class="px-8 py-4 text-[16px] leading-[22px] flex flex-col justify-center text-center opacity-60">
				<span v-if="modalID == 1">Получите скидку 10% на первый заказ по промокоду: SOUS</span>
				<span v-if="modalID == 1">Скидка применяется при заказе от 200 р.</span>
				<span v-else>Получайте кэшбэк 3% с каждого заказа!</span>
			</div>

			<div
				v-if="modalID == 1"
				class="flex justify-center"
			>
				<div
					@click="setPromo"
					class="
						w-[188px] text-[18px] leading-[44px] text-center text-white cursor-pointer transition-all
						duration-200 bg-[#2DC36A] hover:bg-[#1A944B] active:scale-95 sf-pro-display-medium
					"
				>
					Применить промокод
				</div>
			</div>

			<div
				v-if="modalID == 1"
				class="mt-4 mb-12 flex justify-center"
			>
				<span class="px-2 text-yellow-400 border-2 border-dashed border-yellow-400">SOUS</span>
			</div>

		</div>
	</Modal>
</template>


<style scoped>
</style>
