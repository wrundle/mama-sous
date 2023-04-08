<script setup>
window.addEventListener('scroll', () => {
	document.getElementById('back-to-top-btn').style.display = scrollY >= 100 ? 'block' : 'none'
});

const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
</script>


<template>
	<div
		id="back-to-top-btn"
		@click="scrollToTop"
		class="
			w-[50px] h-screen fixed top-0 left-0 cursor-pointer hidden transition-all duration-500
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
