<script setup>
import SectionCard from './Section/SectionCard.vue';

defineProps({
	message: String
});
</script>


<template>
	<div class="">
		<div class="ml-[2px] mb-[20px] text-[30px] font-bold leading-[30px]">
			{{ message }}
		</div>

		<div class="flex flex-col">
			<SectionCard />
			<SectionCard />
		</div>
	</div>
</template>


<style scoped>
</style>
