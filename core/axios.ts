import axios from 'axios';
import { parseCookies } from 'nookies';

axios.defaults.baseURL = 'https://coffee-shop-doppio.vercel.app';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config => {
	if (typeof window !== 'undefined') {
		const { _token } = parseCookies();

		config.headers.Authorization = 'Bearer ' + _token;
	}

	return config;
});

export default axios;
