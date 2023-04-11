<script setup>
const props = defineProps({
	message: String
});
</script>


<template>
	<span
		class="
			mr-[7px] mb-[7px] px-2 py-[1px] text-[18px] text-white uppercase rounded-md bg-opacity-[0.85]
			sf-pro-display-heavy
		"
		:class="{
			'bg-[#FF7A00]': message == 'Хит',
			'bg-[#5EBD6E]': message == 'Вегги',
			'bg-[#07A5FF]': message == 'Топ',
			'bg-[#C970FD]': message == 'Новинка',
			'spicy': message == 'Острое'
		}"
	>
		{{ message }}
	</span>
</template>


<style scoped>
.spicy {
	background: linear-gradient(to left,#FF4C28,#FF8929 65%);
}
</style>
