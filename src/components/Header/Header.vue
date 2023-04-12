<script setup>
import HeaderButton from './HeaderButton.vue';
import { useStore } from 'vuex';
const store = useStore();
</script>


<template>
	<div class="lg:px-[30px] xl:p-0 md:flex pr-[20px] hidden max-w-full flex-row my-[30px] h-[110px]">

		<div class="xl:pr-14 lg:pr-8 flex-shrink flex items-center">
			<a href="" class="focus:outline-none">
				<img
					src="@assets/logo.png"
					class="h-max max-w-[220px]"
				/>
			</a>
		</div>

		<div class="flex-shrink flex flex-wrap items-center">
			<div class="flex flex-wrap gap-x-8">
				<HeaderButton
					@click="store.dispatch('openModal', { type: 'time', params: {} })"
					text="09:00−23:30"
					label="Время работы"
				/>
				<HeaderButton
					@click="store.dispatch('openModal', { type: 'call', params: {} })"
					text="399399"
				/>
				<HeaderButton
					@click="store.dispatch('openModal', { type: 'location', params: {} })"
					text="Адреса и зоны доставки"
				/>
				<HeaderButton
					@click="store.dispatch('openModal', { type: 'location', params: {} })"
					text="Отзывы"
				/>
			</div>
		</div>

		<div class="lg:ml-[70px] lg:mr-[100px] mx-[50px] flex-grow flex items-center justify-center">
			<div class="
				pl-[15px] h-[29px] w-[200px] flex flex-row border rounded-full transition-colors
				bg-neutral-50 hover:bg-white focus-within:bg-white
			">
				<input
					type="text"
					class="
						w-[155px] h-full text-[17px] placeholder:text-[17px] text-neutral-700 rounded-full bg-inherit
						focus:outline-none
					"
				/>
				<div class="min-w-[28px] pr-[2px] flex items-center justify-center">
					<img src="@assets/icons/search.svg" />
				</div>
			</div>
		</div>

		<div class="flex-shrink flex flex-row items-center">
			<span
				@click="store.dispatch('openModal', { type: 'location', params: {} })"
				class="
					text-[17px] transition-colors cursor-pointer text-sky-500 underline underline-offset-2
					decoration-blue-200 hover:decoration-blue-500
				"
			>Войти</span>
			<div class="min-w-[28px] pr-[2px] flex items-center justify-center">
				<img src="@assets/icons/auth.svg" />
			</div>
		</div>

	</div>
</template>


<style scoped>
</style>
