import axios from '@/core/axios';
import { Category, CategoryType } from '@/types';

export const getMenu = async (): Promise<Category[]> => {
	return (await axios.get(`menu`)).data;
};

export const getCategory = async (type: CategoryType): Promise<Category> => {
	return (await axios.get(`menu/category/${type}`)).data;
};
