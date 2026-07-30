import axios, { AxiosInstance } from 'axios';

export const createServerAxios = (token?: string): AxiosInstance =>
	axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:7777',
		headers: token ? { Authorization: `Bearer ${token}` } : {}
	});
