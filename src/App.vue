<script setup>
import BackToTopButton from './components/BackToTopButton.vue';
import RefreshButton from './components/RefreshButton.vue';
import Section from './components/Section.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Promo from './components/Promo.vue';
import Cart from './components/Cart.vue';

import arr from "./content.json";
const content = arr.reduce((acc, x) => {
	x.section in acc ? acc[x.section].push(x) : acc[x.section] = [x];
	return acc;
}, {});
console.log(content);
</script>

<template>
	<div class="px-[30px] w-[1200px]">
		<RefreshButton />
		<BackToTopButton />
		<Header />
		<Promo />
		<Navbar />
		<div class="flex flex-row justify-between">
			<div class="max-w-[817px]">
				<Section
					v-for="(value, key) in content"
					:key="key"
					:title="key"
					:items="value"
				/>
			</div>
			<Cart />
		</div>
	</div>
</template>

<style scoped>
</style>
