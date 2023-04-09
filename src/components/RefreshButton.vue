<script setup>
import { parseContent } from '@/utilities.js';
</script>


<template>
	<div
		@click="parseContent"
		class="
			w-8 h-8 absolute top-3 right-3 rounded-lg cursor-pointer transition-all duration-300
			bg-neutral-200 hover:bg-neutral-300
		"
	>
	</div>
</template>


<style scoped>
</style>
