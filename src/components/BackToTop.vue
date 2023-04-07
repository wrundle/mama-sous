<script setup>
window.addEventListener('scroll', () => {
	const btn = document.getElementById('back-to-top');
	if (scrollY >= 100) {
		if (btn.classList.contains('opacity-0')) btn.classList.remove('opacity-0');
		if (!btn.classList.contains('opacity-100')) btn.classList.add('opacity-100');
	} else {
		if (btn.classList.contains('opacity-100')) btn.classList.remove('opacity-100');
		if (!btn.classList.contains('opacity-0')) btn.classList.add('opacity-0');
	}
});

const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
</script>


<template>
	<div
		id="back-to-top"
		@click="scrollToTop"
		class="
			top-0 left-0 w-[50px] h-screen fixed cursor-pointer opacity-0 transition-all duration-500
			bg-zinc-100 hover:bg-stone-200
		"
	>
		<div class="flex justify-center pt-28">
			<img src="../assets/icons/backToTop.svg" class="w-[16px]" />
		</div>
	</div>
</template>


<style scoped>
</style>
