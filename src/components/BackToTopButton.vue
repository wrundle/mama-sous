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
			xl:visible invisible -z-10 w-[50px] h-screen fixed top-0 left-0 hidden cursor-pointer
			transition-all duration-400 bg-[#9090901A] hover:bg-[#90909033]
		"
	>
		<div class="flex justify-center pt-28">
			<img src="../assets/icons/backToTop.svg" class="w-[16px]" />
		</div>
	</div>
</template>


<style scoped>
</style>
