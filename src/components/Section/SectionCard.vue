<script setup>
const props = defineProps({
	imageName: String
});

const imageUrl = new URL(`../../assets/promo/${props.imageName}`, import.meta.url).href
</script>


<template>
	<div class="w-[390px] h-[424px] border rounded-lg overflow-hidden cursor-default">
		<img
			src="https://cdn.foodpicasso.com/assets/2022/06/23/7455d3947eee6951b501e3b9440cbb2c---jpg_786x486_79755_convert.webp"
			class="w-full h-[240px] object-contain cursor-pointer"
		/>

		<div class="px-[20px] py-[16px]">
			<div class="text-[22px] sf-pro-display-semibold">
				Ролл Мамс
			</div>

			<div class="
				mt-[3px] text-[15px] leading-[18px] text-ellipsis overflow-hidden line-clamp-3 opacity-40
				sf-pro-display-light
			">
				Обжаренное куриное филе, панированное в сухарях, хрустящий салат, ломтики сочного томата и ломтик сыра в зажаренной пшеничной лепешке, заправленной фирменным соусом.
			</div>

			<div class="mt-[16px] flex justify-between">
				<div>
					<div class="text-[22px] leading-[22px] sf-pro-display-heavy mb-1">132 ₽</div>
					<div class="text-[15px] leading-[18px] sf-pro-display-light opacity-40">230 г</div>
				</div>
				<div class="
					w-[40px] h-[40px] relative rounded-lg cursor-pointer transition-all
					bg-[#1dbf73] hover:bg-[#1a944b]
				">
					<div class="w-[16px] h-[4px] absolute top-[18px] left-[12px] bg-white"></div>
					<div class="w-[4px] h-[16px] absolute top-[12px] left-[18px] bg-white"></div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
.line-clamp-3 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}
</style>
