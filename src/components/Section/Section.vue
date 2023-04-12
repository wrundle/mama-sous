<script setup>
import SectionCard from './SectionCard.vue';
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
	title: String,
	items: Array,
	options: Array
});

const pushOptions = (item) => {
	item['options'] = props.options;
	return item;
};

const prevTop = ref(0);

const handleScroll = () => {
	const el = document.getElementById(`${props.title}-section`);
	if (el.getBoundingClientRect().top * prevTop.value <= 0) {
		store.dispatch('setActiveSection', props.title);
	}
	prevTop.value = el.getBoundingClientRect().top;
};

window.addEventListener('scroll', handleScroll);

onMounted(() => prevTop.value = document.getElementById(`${props.title}-section`).getBoundingClientRect().top);
</script>


<template>
	<div
		:id="`${props.title}-section`"
		class="ml-[2px] mb-[20px] text-[30px] leading-[30px] cursor-default sf-pro-display-heavy"
	>
		{{ title }}
	</div>

	<div class="grid grid-cols-2 xl:gap-8 lg:gap-4 gap-2 pb-10">
		<SectionCard
			v-for="item in items"
			:key="item.name"
			v-bind="pushOptions(item)"
		/>
	</div>
</template>


<style scoped>
</style>
