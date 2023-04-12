<script setup>
import { parseContent, parseOptions } from '@/utilities.js';

const clickHandle = () => {
	parseContent();
	parseOptions();
};
</script>


<template>
	<div
		@click="clickHandle"
		class="
			lg:block hidden w-8 h-8 absolute top-3 right-3 rounded-lg cursor-pointer transition-all duration-300
			bg-neutral-200 hover:bg-neutral-300
		"
	>
	</div>
</template>


<style scoped>
</style>
