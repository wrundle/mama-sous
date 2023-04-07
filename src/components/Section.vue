<script setup>
import SectionCard from './Section/SectionCard.vue';

defineProps({
	message: String
});
</script>


<template>
	<div class="">
		<div class="ml-[2px] mb-[20px] text-[30px] leading-[30px] cursor-default sf-pro-display-heavy">
			{{ message }}
		</div>

		<div class="flex flex-wrap gap-y-[30px] pb-10 justify-between">
			<SectionCard />
			<SectionCard />
			<SectionCard />
			<SectionCard />
		</div>
	</div>
</template>


<style scoped>
</style>
