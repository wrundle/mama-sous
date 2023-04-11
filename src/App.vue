<script setup>
import { useStore } from 'vuex';

import BackToTopButton from './components/BackToTopButton.vue';
import RefreshButton from './components/RefreshButton.vue';
import Section from './components/Section/Section.vue';
import Header from './components/Header/Header.vue';
import Navbar from './components/Navbar/Navbar.vue';
import Promo from './components/Promo.vue';
import Cart from './components/Cart/Cart.vue';
import Footer from './components/Footer.vue';

import ModalLoCATion from './components/Modals/ModalLoCATion.vue';
import ModalPromo from './components/Modals/ModalPromo.vue';
import ModalCard from './components/Modals/ModalCard.vue';
import ModalTime from './components/Modals/ModalTime.vue';
import ModalCall from './components/Modals/ModalCall.vue';

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
</script>


<template>
	<div class="w-full flex flex-col justify-center items-center">
		<ModalCard v-if="store.state.modal.type == 'card'" />
		<ModalPromo v-if="store.state.modal.type == 'promo'" />
		<ModalTime v-if="store.state.modal.type == 'time'" />
		<ModalCall v-if="store.state.modal.type == 'call'"/>
		<ModalLoCATion v-if="store.state.modal.type == 'location'"/>
		<div class="w-[1200px] px-[30px]">
			<RefreshButton />
			<BackToTopButton />
			<Header />
			<Promo />
			<Navbar :sections="Object.keys(content)" />
			<div class="flex flex-row justify-between">
				<div class="max-w-[817px]">
					<Section
						v-for="(value, key) in content"
						:key="key"
						:title="key"
						:items="value"
						:options="options[key]"
					/>
				</div>
				<Cart />
			</div>
		</div>
		<Footer />
	</div>
</template>


<style scoped>
</style>
