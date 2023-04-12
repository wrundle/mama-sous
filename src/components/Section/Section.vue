<script setup>
import SectionCard from './SectionCard.vue';
import { useStore } from 'vuex';
import { ref } from 'vue'

const store = useStore();

const props = defineProps({
	options: Array,
	index: Number,
	title: String,
	items: Array
});

const pushOptions = (item) => {
	item['options'] = props.options;
	return item;
};

const handleScroll = () => {
	const el = document.getElementById(`${props.title}-section`);
	store.dispatch('setActiveSection', {
		section: props.title,
		distance: (Math.abs(el.getBoundingClientRect().top))
	});
};

window.addEventListener('scroll', handleScroll);
</script>


<template>
	<div :id="`${props.title}-section`">
		<div
			class="
				lg:block lg:text-[30px] lg:leading-[30px] lg:sf-pro-display-heavy block ml-[2px] mb-[20px]
				text-[19px] leading-[19px] cursor-default sf-pro-display-semibold
			"
			:class="{
				'hidden': index == 0
			}"
		>
			{{ title }}
		</div>

		<div class="pb-10 grid grid-cols-2 xl:gap-8 lg:gap-4 gap-2">
			<SectionCard
				v-for="item in items"
				:key="item.name"
				v-bind="pushOptions(item)"
			/>
		</div>
	</div>
</template>


<style scoped>
</style>
