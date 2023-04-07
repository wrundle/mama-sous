<script setup>
const props = defineProps({
	imageName: String
});

const imageUrl = new URL(`../../assets/promo/${props.imageName}`, import.meta.url).href
</script>


<template>
	<img :src="imageUrl" class="w-[367px] h-[164px] mr-5 object-contain rounded-lg not-draggable" />
</template>


<style scoped>
.not-draggable {
	/* user-drag: none; */
    -webkit-user-drag: none;
    /* user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none; */
}
</style>
