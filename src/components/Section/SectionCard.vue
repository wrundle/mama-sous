<script setup>
import SectionCardBadge from './SectionCardBadge.vue';
import { ref } from 'vue'

const props = defineProps({
	badges: Array,
	description: String,
	imgSrc: String,
	name: String,
	price: String,
	size: String,
	options: Array
});

const open = ref(false);

const openModal = (e) => {
	open.value = true;
	document.body.classList.add('overflow-hidden');
};

const closeModal = (e) => {
	open.value = e.target !== e.currentTarget;
	document.body.classList.remove('overflow-hidden');
};
</script>


<template>
	<div
		@click="openModal"
		class="w-[390px] flex flex-col border rounded-lg overflow-hidden cursor-default relative"
	>
		<Teleport to="body">
			<Transition>
				<div
					v-if="open"
					@click="closeModal"
					class="z-20 w-full h-full fixed top-0 left-0 flex justify-center bg-[#000c] transition-all"
				>
					<div class="
						z-30 w-[350px] mt-6 mb-3 relative overflow-hidden
						rounded-lg cursor-default bg-white
					">
						<div class="
							w-[27px] h-[27px] absolute top-[12px] right-[12px] flex justify-center items-center
							rounded-full cursor-pointer bg-[#EFEFEF]
						">
							<img
								src="../../assets/icons/cross.svg"
								class="max-w-[13px] opacity-75 hover:opacity-100 transition-all"
							/>
						</div>

						<img
							:src="imgSrc"
							class="w-full object-cover"
						/>

						<div class="mt-5 px-[21px] flex flex-col gap-y-4 overflow-auto">
							<div class="flex flex-row justify-between leading-[19px]">
								<div class="text-[17px] sf-pro-display-medium">
									{{ name }}
									<span class="ml-1 text-[15px] opacity-40">{{ size }}</span>
								</div>
								<div class="w-[80px] text-[17px] flex justify-end">{{ price }}</div>
							</div>
							<div class="pr-[30px] text-[16px] leading-[20px] opacity-50">{{ description }}</div>
						</div>
					</div>
				</div>
			</Transition>
		</Teleport>

		<div class="absolute top-[15px] left-[15px] flex flex-wrap overflow-hidden">
			<SectionCardBadge
				v-for="badge in badges"
				:key="badge"
				:message="badge"
			/>
		</div>

		<img
			:src="imgSrc"
			class="flex-initial w-full h-[240px] object-cover cursor-pointer"
		/>

		<div class="px-[20px] py-[16px] flex-grow flex flex-col">
			<div class="flex-grow">
				<div class="text-[22px] leading-[26px] sf-pro-display-semibold">
					{{ name }}
				</div>
				<div class="
					mt-[3px] text-[15px] leading-[18px] text-ellipsis overflow-hidden opacity-40
					line-clamp-3 sf-pro-display-light
				">
					{{ description }}
				</div>
			</div>

			<div class="mt-[16px] flex justify-between">
				<div>
					<div class="text-[22px] leading-[22px] sf-pro-display-heavy mb-1">{{ price }}</div>
					<div class="text-[15px] leading-[18px] sf-pro-display-light opacity-40">{{ size }}</div>
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

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
