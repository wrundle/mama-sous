<script setup>
import HeaderButton from './Header/HeaderButton.vue'

const testClick = () => {
	console.log(1);
};
</script>


<template>
	<div class="flex-auto flex flex-row my-[30px] h-[110px]">

		<div class="flex-shrink flex items-center pr-[55px]">
			<a href="" class="focus:outline-none">
				<img class="h-max max-w-[220px]" src="https://app.foodpicasso.com/source/photos/2022/05/24/296bce6aeef5fddb6b8afcf553e999c8.png" />
			</a>
		</div>


		<div class="flex-shrink pb-[25px] pt-[11px]">
			<div class="-mb-[3px] text-[13px] text-neutral-400">Время работы</div>
			<div class="flex flex-col">
				<div class="mb-1">
					<HeaderButton message="09:00-23:30" @click="testClick" />
					<HeaderButton message="399399" @click="testClick" />
					<HeaderButton message="Адреса и зоны доставки" @click="testClick" />
				</div>
				<HeaderButton message="Отзывы" @click="testClick" />
			</div>
		</div>

		<div class="ml-[70px] mr-[100px] flex-grow flex items-center justify-center">
			<div class="
				pl-[15px] h-[29px] w-[200px] flex flex-row border rounded-full transition-colors
				bg-neutral-50 hover:bg-white focus-within:bg-white
			">
				<input type="text" class="
					w-[155px] text-[17px] leading-4 text-neutral-700 h-full rounded-full bg-inherit focus:outline-none
				" />
				<div class="min-w-[28px] pr-[2px] flex items-center justify-center">
					<img src="../assets/icons/iconSearch.svg" />
				</div>
			</div>
		</div>

		<div class="flex-shrink flex flex-row items-center">
			<span @click="testClick" class="
				text-[17px] transition-colors cursor-pointer text-sky-500
				underline underline-offset-2 decoration-blue-200 hover:decoration-blue-500
			">Войти</span>
			<div class="min-w-[28px] pr-[2px] flex items-center justify-center">
				<img src="../assets/icons/iconAuth.svg" />
			</div>
		</div>

	</div>
</template>


<style scoped>
</style>
