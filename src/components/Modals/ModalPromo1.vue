<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>


<template>
	<Transition>
		<div
			v-if="store.openModal == 'ModalPromo1'"
			@click="closeModal"
			class="
				z-20 w-full h-screen overflow-auto fixed top-0 left-0 flex justify-center transition-all
				bg-[#000c]
			"
		>

		</div>
	</Transition>
</template>


<style scoped>
</style>
