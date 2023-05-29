import axios from '@/core/axios';
import { Barista, Blog, Lesson } from '@/types';

export const getBaristas = async (): Promise<Barista[]> => {
	return (await axios.get('/baristas')).data;
};

export const getLessons = async (): Promise<Lesson[]> => {
	return (await axios.get('/lessons')).data;
};

export const getBlogs = async (): Promise<Blog[]> => {
	return (await axios.get('/blogs')).data;
};
