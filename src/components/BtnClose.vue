<script setup>
import { useStore } from 'vuex';
const store = useStore();
const closeModal = () => {
	store.dispatch('clearSelected');
	store.dispatch('closeModal');
};
</script>


<template>
	<div
		@click="closeModal"
		class="w-[27px] h-[27px] absolute top-[12px] right-[12px] flex justify-center items-center rounded-full cursor-pointer bg-[#EFEFEF]"
	>
		<img
			src="@assets/icons/cross.svg"
			class="max-w-[13px] opacity-75 hover:opacity-100 transition-all"
		/>
	</div>
</template>


<style scoped>
</style>
