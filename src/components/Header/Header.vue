<script setup>
import HeaderButton from './HeaderButton.vue';
import { useStore } from 'vuex';
const store = useStore();
</script>


<template>
	<div class="flex flex-row my-[30px] h-[110px]">

		<div class="flex-shrink flex items-center pr-[55px]">
			<a href="" class="focus:outline-none">
				<img
					src="@assets/logo.png"
					class="h-max max-w-[220px]"
				/>
			</a>
		</div>

		<div class="flex-shrink pb-[25px] pt-[11px]">
			<div class="-mb-[3px] text-[13px] text-neutral-400">Время работы</div>
			<div class="flex flex-col">
				<span class="mb-1">
					<HeaderButton
						@click="store.dispatch('openModal', { type: 'time', params: {} })"
						message="09:00−23:30"
					/>
					<HeaderButton
						@click="store.dispatch('openModal', { type: 'call', params: {} })"
						message="399399"
					/>
					<HeaderButton
						@click="store.dispatch('openModal', { type: 'location', params: {} })"
						message="Адреса и зоны доставки"
					/>
				</span>
				<HeaderButton
					@click="store.dispatch('openModal', { type: 'location', params: {} })"
					message="Отзывы"
				/>
			</div>
		</div>

		<div class="ml-[70px] mr-[100px] flex-grow flex items-center justify-center">
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
