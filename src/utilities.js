import axios, {isCancel, AxiosError} from 'axios';

export const parseContent = async () => {
	const response = await axios({
		method: 'GET',
		baseURL: 'https://mama-sous-api.vercel.app',
	});
	console.log(response.data);
};

export const parseOptions = async () => {
	const response = await axios({
		method: 'GET',
		baseURL: 'https://mama-sous-api.vercel.app/options',
	});
	console.log(response.data);
};
