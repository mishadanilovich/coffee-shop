import { AxiosInstance } from 'axios';
import clientAxios from '@/core/axios';
import { Category, CategoryType } from '@/types';

export const getMenu = async (instance: AxiosInstance = clientAxios): Promise<Category[]> => {
	return (await instance.get(`menu`)).data;
};

export const getCategory = async (
	type: CategoryType,
	instance: AxiosInstance = clientAxios
): Promise<Category> => {
	return (await instance.get(`menu/category/${type}`)).data;
};
