import axios from 'axios';
import { parseCookies } from 'nookies';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:7777';

axios.interceptors.request.use(config => {
	if (typeof window !== 'undefined') {
		const { _token } = parseCookies();

		config.headers.Authorization = 'Bearer ' + _token;
	}

	return config;
});

export default axios;
