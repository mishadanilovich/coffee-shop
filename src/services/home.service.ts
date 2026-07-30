import { AxiosInstance } from 'axios';
import clientAxios from '@/core/axios';
import { Barista, Blog, Lesson } from '@/types';

export const getBaristas = async (instance: AxiosInstance = clientAxios): Promise<Barista[]> => {
	return (await instance.get('/baristas')).data;
};

export const getLessons = async (instance: AxiosInstance = clientAxios): Promise<Lesson[]> => {
	return (await instance.get('/lessons')).data;
};

export const getBlogs = async (instance: AxiosInstance = clientAxios): Promise<Blog[]> => {
	return (await instance.get('/blogs')).data;
};
