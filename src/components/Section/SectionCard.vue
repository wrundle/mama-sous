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
		class="flex flex-col border rounded-lg overflow-hidden cursor-default relative"
	>

		<div class="absolute top-[15px] left-[15px] flex flex-wrap overflow-hidden">
			<SectionCardBadge
				v-for="badge in badges"
				:key="badge"
				:message="badge"
			/>
		</div>

		<img
			:src="imgSrc"
			class="aspect-[8/5] w-full flex-initial object-cover cursor-pointer"
		/>

		<div class="px-[20px] py-[16px] flex-grow flex flex-col">
			<div class="flex-grow">
				<div class="text-[22px] leading-[26px] sf-pro-display-semibold">
					{{ name }}
				</div>
				<div class="
					mt-[3px] text-[15px] leading-[18px] text-ellipsis overflow-hidden opacity-40
					line-clamp-3 sf-pro-display-light
				">
					{{ description }}
				</div>
			</div>

			<div class="mt-[16px] flex justify-between">
				<div>
					<div class="text-[22px] leading-[22px] sf-pro-display-heavy mb-1">{{ price }}</div>
					<div class="text-[15px] leading-[18px] sf-pro-display-light opacity-40">{{ size }}</div>
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
.line-clamp-3 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}

.shadow {
	box-shadow: 0 2px 14px rgba(0,0,0,.09);
}
</style>
