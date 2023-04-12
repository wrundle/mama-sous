<script setup>
import SectionCardBadge from './SectionCardBadge.vue';
import { useStore } from 'vuex';

const props = defineProps({
	description: String,
	options: Array,
	imgSrc: String,
	price: String,
	badges: Array,
	name: String,
	size: String
});

const store = useStore();

const selectCard = () => {
	store.dispatch('setSelectedCard', {
		description: props.description,
		options: props.options,
		image: props.imgSrc,
		price: props.price,
		name: props.name,
		size: props.size,
	});
	store.dispatch('openModal', { type: 'card', params: {} });
};
</script>


<template>
	<div
		@click="selectCard"
		class="flex flex-col border rounded-lg overflow-hidden cursor-default relative bg-white"
	>

		<div class="md:top-[14px] md:left-[14px] absolute top-[7px] left-[7px] flex flex-wrap overflow-hidden">
			<SectionCardBadge
				v-for="badge in badges"
				:key="badge"
				:message="badge"
			/>
		</div>

		<img
			:src="imgSrc"
			class="sm:aspect-[8/5] aspect-square w-full flex-initial object-cover cursor-pointer"
		/>

		<div class="sm:px-[20px] sm:py-[16px] p-[10px] flex-grow flex flex-col">
			<div class="flex-grow">
				<div class="sm:text-[22px] sm:leading-[26px] sm:sf-pro-display-semibold text-[16px] leading-[18px]">
					{{ name }}
				</div>
				<div class="
					sm:line-clamp-3 mt-[3px] hidden text-[15px] leading-[18px] text-ellipsis overflow-hidden opacity-40
					sf-pro-display-light
				">
					{{ description }}
				</div>
			</div>

			<div class="mt-[16px] flex justify-between">
				<div class="text-[16px] leading-[18px]">
					<div class="sm:text-[22px] sm:leading-[22px] sf-pro-display-heavy mb-1">{{ price }}</div>
					<div class="sm:text-[15px] sm:leading-[18px] sf-pro-display-light opacity-40">{{ size }}</div>
				</div>
				<div class="
					w-[40px] h-[40px] relative rounded-lg cursor-pointer transition-all
					bg-[#1dbf73] hover:bg-[#1a944b]
				">
					<div class="w-[16px] h-[4px] absolute top-[18px] left-[12px] bg-white"></div>
					<div class="w-[4px] h-[16px] absolute top-[12px] left-[18px] bg-white"></div>
				</div>
			</div>
		</div>

	</div>
</template>


<style scoped>
.shadow {
	box-shadow: 0 2px 14px rgba(0,0,0,.09);
}
</style>
