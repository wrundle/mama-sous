<script setup>
import BackToTop from './components/BackToTop.vue';
import Section from './components/Section.vue';
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Promo from './components/Promo.vue';
</script>

<template>
	<div class="px-[30px] w-[1200px]">
		<BackToTop />
		<Header />
		<Promo />
		<Navbar />
		<div class="flex flex-row h-screen">
			<div class="">
				<Section message="В лепёшке" />
				<Section message="Бургеры" />
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
