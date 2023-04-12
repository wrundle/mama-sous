<script setup>
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
	message: String,
	isPinned: Boolean
});

const scroll = () => document.getElementById(`${props.message}-section`).scrollIntoView({ behavior: "smooth" });
</script>


<template>
	<div
		@click="scroll"
		class="
			xl:mr-[25px] xl:p-0 xl:text-[22px] lg:text-[20px] xl:leading-[26px] lg:sf-pro-display-semibold px-2
			text-[16px] leading-[32px] inline-flex items-center cursor-pointer transition-all duration-400
			hover:text-[#FF0000] underline-offset-2 decoration-[3px]
		"
		:class="{
			'h-full': isPinned,
			'text-[#FF0000] underline': message == store.state.activeSection
		}"
	>
		{{ message }}
	</div>
</template>


<style scoped>
</style>
