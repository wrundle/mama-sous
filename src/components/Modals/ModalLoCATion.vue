<script setup>
import Modal from './Modal.vue';
import { useStore } from 'vuex';

const store = useStore();
const closeModal = (e) => store.dispatch('closeModal');
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
				Адреса и зоны доставки
			</div>

			<div class="">
				<img src="https://i.redd.it/5unn16axx1v81.jpg" />
			</div>

		</div>
	</Modal>
</template>


<style scoped>
</style>
