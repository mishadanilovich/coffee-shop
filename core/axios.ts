import axios from 'axios';

const clientAxios = axios.create({
	baseURL: '/api/proxy'
});

export default clientAxios;
