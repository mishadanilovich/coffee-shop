import { AxiosInstance } from 'axios';
import clientAxios from '@/core/axios';
import { Basket } from '@/types';
import { PaymentIntent } from '@stripe/stripe-js';

export const getCurrent = async (instance: AxiosInstance = clientAxios): Promise<Basket> => {
	return (await instance.get('/basket/current')).data;
};

export const addBasketItem = async (
	itemData: { basketId: string; menuItemId: string },
	instance: AxiosInstance = clientAxios
) => {
	return await instance.post('/basket/order/add', itemData);
};

export const removeBasketItem = async (
	itemData: { basketId: string; menuItemId: string },
	instance: AxiosInstance = clientAxios
) => {
	return await instance.delete('/basket/order/remove', {
		data: itemData
	});
};

export const checkoutBasket = async (
	basketId: string,
	instance: AxiosInstance = clientAxios
): Promise<PaymentIntent> => {
	return (await instance.post(`/stripe/basket/${basketId}`)).data;
};

export const submit = async (data: Basket, instance: AxiosInstance = clientAxios) => {
	return await instance.patch('/basket/submit', data);
};
