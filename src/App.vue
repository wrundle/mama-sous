<script setup>
import BackToTopButton from './components/BackToTopButton.vue';
import RefreshButton from './components/RefreshButton.vue';
import Section from './components/Section.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Promo from './components/Promo.vue';
import Cart from './components/Cart.vue';
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
				<Section message="В лепёшке" />
				<Section message="Бургеры" />
			</div>
			<Cart />
		</div>
	</div>
</template>

<style scoped>
</style>
