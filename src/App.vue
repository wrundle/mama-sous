<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

import BackToTopButton from './components/BackToTopButton.vue';
import RefreshButton from './components/RefreshButton.vue';
import Section from './components/Section/Section.vue';
import Header from './components/Header/Header.vue';
import Navbar from './components/Navbar/Navbar.vue';
import Promo from './components/Promo.vue';
import Cart from './components/Cart/Cart.vue';
import Footer from './components/Footer.vue';

import HeaderMobile from './components/Header/HeaderMobile.vue';
import CartMobile from './components/Cart/CartMobile.vue';

import ModalLoCATion from './components/Modals/ModalLoCATion.vue';
import ModalPromo from './components/Modals/ModalPromo.vue';
import ModalCard from './components/Modals/ModalCard.vue';
import ModalTime from './components/Modals/ModalTime.vue';
import ModalCall from './components/Modals/ModalCall.vue';
import ModalCart from './components/Modals/ModalCart.vue';

import optionsObject from "./options.json";
import contentArray from "./content.json";

const store = useStore();

const content = contentArray.reduce((acc, x) => {
	x.section in acc ? acc[x.section].push(x) : acc[x.section] = [x];
	return acc;
}, {});
// console.log(content);

const options = new Object();
for (const key in optionsObject) {
	options[key] = JSON.parse(optionsObject[key]);
};
// console.log(options);

const screenWidth = computed(() => window.screen.width);
</script>


<template>
	<div class="w-full flex flex-col justify-center items-center relative">
		<HeaderMobile />
		<Transition name="slow-slide"><CartMobile v-if="Object.entries(store.state.cart).length > 0" /></Transition>
		<Transition :name="screenWidth > 640 ? 'opacity' : 'slide'">
			<ModalCard v-if="store.state.modal.type == 'card'" />
			<ModalPromo v-else-if="store.state.modal.type == 'promo'" />
			<ModalTime v-else-if="store.state.modal.type == 'time'" />
			<ModalCall v-else-if="store.state.modal.type == 'call'" />
			<ModalLoCATion v-else-if="store.state.modal.type == 'location'" />
			<ModalCart v-else-if="store.state.modal.type == 'cart'" />
		</Transition>
		<div class="xl:w-[1280px] xl:px-[70px] lg:px-[30px] w-full">
			<RefreshButton />
			<BackToTopButton />
			<Header />
			<Promo />
			<Navbar :sections="Object.keys(content)" />
			<div class="lg:bg-white md:px-1 px-2 flex bg-[#F1F1F1]">
				<div class="lg:pt-0 pt-2 flex-grow">
					<Section
						v-for="(value, key, index) in content"
						:key="key"
						:title="key"
						:items="value"
						:options="options[key]"
						:index="index"
					/>
				</div>
				<Cart />
			</div>
		</div>
		<Footer />
	</div>
</template>


<style scoped>
.opacity-enter-active,
.opacity-leave-active {
	transition: opacity 0.2s ease;
}
.opacity-enter-from,
.opacity-leave-to {
	opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.2s ease-out;
}
.slide-enter-from,
.slide-leave-to {
	transform: translateY(100%);
}

.slow-slide-enter-active,
.slow-slide-leave-active {
	transition: all 0.5s ease-out;
}
.slow-slide-enter-from,
.slow-slide-leave-to {
	transform: translateY(100%);
}
</style>
