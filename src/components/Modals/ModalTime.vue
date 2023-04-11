<script setup>
import Modal from './Modal.vue';
import { useStore } from 'vuex';

const store = useStore();
const closeModal = (e) => store.dispatch('closeModal');

const d = new Date();
const day = d.getDay();
const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
</script>


<template>
	<Modal>
		<div class="w-[400px] h-max pb-6 relative rounded-lg cursor-default bg-white sf-pro-display-heavy">

			<div
				@click="closeModal"
				class="
					w-[27px] h-[27px] absolute top-[12px] right-[12px] flex justify-center items-center rounded-full
					cursor-pointer bg-[#EFEFEF]
				"
			>
				<img
					src="@assets/icons/cross.svg"
					class="max-w-[13px] opacity-75 hover:opacity-100 transition-all"
				/>
			</div>

			<div class="flex justify-center items-center text-[24px] leading-[52px]">
				Время работы
			</div>

			<div
				v-for="item in days"
				class="my-[20px] text-[20px] leading-[24px] flex flex-row justify-center items-center"
				:class="{ 'opacity-20': days.indexOf(item) + 1 != day }"
			>
				<span
					class="w-[50px] flex-none"
					:class="{ 'text-orange-500': days.indexOf(item) + 1 == day }"
				>{{ item }}</span>
				<span>09:00 − 23:30</span>
			</div>

		</div>
	</Modal>
</template>


<style scoped>
</style>
