<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue'

const props = defineProps({
	imgSrc: String,
	name: String,
	price: String
});

const store = useStore();

const checked = ref(false);

const toggleOption = () => {
	checked.value = !checked.value;
	if (checked.value) {
		store.dispatch('addOption', {
			name: props.name,
			price: props.price,
			amount: 1
		});
	} else {
		store.dispatch('removeOption', props.name);
	};
	// console.log(store.state.selectedOptions);
};
</script>


<template>
	<div
		@click="toggleOption"
		class="h-[60px] mb-[10px] flex flex-row items-center cursor-pointer"
	>
		<img
			:src="imgSrc"
			class="w-[60px] relative -left-[10px]"
		/>

		<div class="flex-grow">
			<span class="mr-[7px] text-[16px] leading-[18px] sf-pro-display-light">
				{{ name }}
			</span>
			<span class="text-[14px] leading-[14px] opacity-50 sf-pro-display-light">
				<span v-if="price.split('\xa0')[0] != '0'">+</span>{{ price }}
			</span>
		</div>

		<div
			class="
				w-[25px] h-[25px] ml-[15px] flex-none flex items-center justify-center rounded-md
				transition-all duration-200
			"
			:class="{
				'bg-[#F0F0F0]': !checked,
				'bg-[#373737]': checked
			}"
		>
			<img
				src="../../assets/icons/checkmark.svg"
				class="max-w-[15px] transition-all"
				:class="{
					'opacity-0': !checked,
					'opacity-100': checked
				}"
			/>
		</div>
	</div>
</template>


<style scoped>
</style>
