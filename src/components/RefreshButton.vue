<script setup>
import axios, {isCancel, AxiosError} from 'axios';

const getContent = async () => {
	const response = await axios({
		method: 'GET',
		baseURL: 'https://mama-sous-api.vercel.app',
	});
	console.log(response.data);
};
</script>


<template>
	<div
		@click="getContent"
		class="
			w-8 h-8 absolute top-3 right-3 rounded-lg cursor-pointer transition-all duration-300
			bg-neutral-200 hover:bg-neutral-300
		"
	>
	</div>
</template>


<style scoped>
</style>
