<script setup>
import SectionCardBadge from './SectionCardBadge.vue';

const props = defineProps({
	badges: Array,
	description: String,
	imgSrc: String,
	name: String,
	price: String,
	size: String
});
</script>


<template>
	<div class="w-[390px] flex flex-col border rounded-lg overflow-hidden cursor-default relative">
		<div class="absolute top-[15px] left-[15px] flex flex-wrap overflow-hidden">
			<SectionCardBadge
				v-for="badge in badges"
				:key="badge"
				:message="badge"
			/>
		</div>

		<img
			:src="imgSrc"
			class="flex-initial w-full h-[240px] object-cover cursor-pointer"
		/>

		<div class="px-[20px] py-[16px] flex-grow flex flex-col">
			<div class="flex-grow">
				<div class="text-[22px] leading-[26px] sf-pro-display-semibold">
					{{ name }}
				</div>
				<div class="
					mt-[3px] text-[15px] leading-[18px] text-ellipsis overflow-hidden line-clamp-3 opacity-40
					sf-pro-display-light
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
</style>
