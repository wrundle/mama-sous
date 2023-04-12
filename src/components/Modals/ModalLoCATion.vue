<script setup>
import BtnClose from '../BtnClose.vue';
import Modal from './Modal.vue';
</script>


<template>
	<Modal>
		<div class="w-[400px] h-max pb-6 relative rounded-lg cursor-default bg-white sf-pro-display-heavy">

			<BtnClose />

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
