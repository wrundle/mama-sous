<script setup>
import SectionCard from './Section/SectionCard.vue';

defineProps({
	title: String,
	items: Array
});
</script>


<template>
	<div>
		<div class="ml-[2px] mb-[20px] text-[30px] leading-[30px] cursor-default sf-pro-display-heavy">
			{{ title }}
		</div>

		<div class="flex flex-wrap gap-y-[30px] pb-10 justify-between">
			<SectionCard
				v-for="item in items"
				:key="item.name"
				v-bind="item"
			/>
		</div>
	</div>
</template>


<style scoped>
</style>
