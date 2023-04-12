<script setup>
import ModalCardOption from './ModalCardOption.vue';
import BtnClose from '../BtnClose.vue';
import Modal from './Modal.vue';

import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const amount = ref(1);

const changeAmount = (value) => {
	amount.value += amount.value + value > 0 ? value : 0;
};

const addToCart = (e) => {
	store.dispatch('addToCart', amount);
	store.dispatch('clearSelected');
	store.dispatch('closeModal');
};
</script>


<template>
	<Modal>
		<div :class="{ 'flex items-center': store.state.selectedCard.options == undefined }">
			<div class="z-30 w-[350px] h-max mt-6 mb-3 relative rounded-lg cursor-default bg-white">

				<BtnClose />

				<img
					:src="store.state.selectedCard.image"
					class="w-full object-cover rounded-lg"
				/>

				<div class="pt-5 px-[21px] flex flex-col gap-y-4">
					<div class="flex flex-row justify-between leading-[19px]">
						<div class="text-[17px] sf-pro-display-medium">
							{{ store.state.selectedCard.name }}
							<span class="ml-1 text-[15px] opacity-40">{{ store.state.selectedCard.size }}</span>
						</div>
						<div class="w-[80px] text-[17px] flex justify-end">{{ store.state.selectedCard.price }}</div>
					</div>

					<div class="pr-[30px] text-[16px] leading-[20px] opacity-50">{{ store.state.selectedCard.description }}</div>

					<div
						v-for="(value, key) in store.state.selectedCard.options"
						:key="key"
					>
						<div class="mb-[15px] text-[16px] leading-[18px] sf-pro-display-heavy">
							{{ value.title }}
						</div>
						<div
							v-for="option in value.options"
							:key="option.name"
						>
							<ModalCardOption
								:imgSrc="option.photo"
								:name="option.name"
								:price="option.price_formatted"
							/>
						</div>
					</div>
				</div>

				<div
					:class="{ 'pt-20': store.state.selectedCard.options == undefined }"
					class="z-40 w-[350px] p-[10px] sticky bottom-0 flex flex-row justify-between rounded-lg select-none bg-white shadow"
				>
					<div class="h-[44px] flex flex-row">
						<div
							@click="changeAmount(-1)"
							class="
								group w-[44px] flex items-center justify-center relative rounded-lg
								transition-all
							"
							:class="{
								'cursor-pointer bg-[#F4F3EF] hover:bg-[#3D3D3D] active:scale-95': amount > 1,
								'opacity-30': amount <= 1
							}"
						>
							<div
								class="w-[16px] h-[2px] absolute top-[21px] left-[14px] bg-black"
								:class="{'group-hover:bg-white': amount > 1,}"
							></div>
						</div>
						<div class="w-[44px] flex items-center justify-center">
							<span class="text-[18px] leading-[44px]">{{ amount }}</span>
						</div>
						<div
							@click="changeAmount(1)"
							class="
								group w-[44px] flex items-center justify-center relative rounded-lg
								transition-all active:scale-95 bg-[#F4F3EF] hover:bg-[#3D3D3D] cursor-pointer
							"
						>
							<div
								class="w-[16px] h-[2px] absolute top-[21px] left-[14px] bg-black group-hover:bg-white"
							></div>
							<div class="w-[2px] h-[16px] absolute top-[14px] left-[21px] bg-black group-hover:bg-white"></div>
						</div>
					</div>

					<div
						@click="addToCart"
						class="
							z-50 w-[188px] text-[18px] leading-[44px] text-center rounded-lg
							cursor-pointer transition-all duration-200 bg-[#2DC36A] hover:bg-[#1A944B]
							text-white active:scale-95 sf-pro-display-medium
						"
					>
						Добавить к заказу
					</div>
				</div>
			</div>
		</div>
	</Modal>
</template>


<style scoped>
</style>
