<script setup>
import BtnClose from '../BtnClose.vue';
import Modal from './Modal.vue';
</script>


<template>
	<Modal>
		<div class="w-[400px] h-max pb-6 relative rounded-lg cursor-default bg-white sf-pro-display-heavy">

			<BtnClose />

			<div class="flex justify-center items-center text-[24px] leading-[52px]">
				Заказать доставку
			</div>

			<div
				v-for="item in 4"
				class="my-[20px] mx-[45px] text-[25px] leading-[35px] cursor-pointer"
			>
				📞 399399
			</div>

		</div>
	</Modal>
</template>


<style scoped>
</style>
