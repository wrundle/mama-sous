<script setup>
const props = defineProps({
	imageName: String
});

const imageUrl = new URL(`../../assets/promo/${props.imageName}`, import.meta.url).href
</script>


<template>
	<div class="w-[390px] h-[415px] border rounded-lg overflow-hidden">
        <img
            src="https://cdn.foodpicasso.com/assets/2022/06/23/7455d3947eee6951b501e3b9440cbb2c---jpg_786x486_79755_convert.webp"
            class="object-contain"
        />
    </div>
</template>


<style scoped>
</style>
