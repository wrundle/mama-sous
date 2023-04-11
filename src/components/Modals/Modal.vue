<script setup>
import { useStore } from 'vuex';
const store = useStore();
const closeModalBackground = (e) => e.target === e.currentTarget ? store.dispatch('closeModal') : {};
</script>


<template>
	<Transition>
		<div
			@click="closeModalBackground"
			class="z-20 w-full h-screen fixed top-0 left-0 flex justify-center items-center overflow-auto transition-all bg-[#000c]"
		>
			<slot></slot>
		</div>
	</Transition>
</template>


<style scoped>
</style>
