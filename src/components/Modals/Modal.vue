<script setup>
import { useStore } from 'vuex';
const store = useStore();
const closeModal = (e) => {
	if (e.target === e.currentTarget) {
		store.dispatch('clearSelected');
		store.dispatch('closeModal');
	};
};
</script>


<template>
	<Transition>
		<div
			@click="closeModal"
			class="z-20 w-full h-screen fixed top-0 left-0 flex justify-center overflow-auto transition-all bg-[#000c]"
			:class="{ 'items-center': store.state.modal.type != 'card' }"
		>
			<slot></slot>
		</div>
	</Transition>
</template>


<style scoped>
</style>
