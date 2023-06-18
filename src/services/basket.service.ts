import axios from '@/core/axios';
import { Basket } from '@/types';
import { PaymentIntent } from '@stripe/stripe-js';

export const getCurrent = async (): Promise<Basket> => {
	return (await axios.get('/basket/current')).data;
};

export const addBasketItem = async (itemData: { basketId: string; menuItemId: string }) => {
	return await axios.post('/basket/order/add', itemData);
};

export const removeBasketItem = async (itemData: { basketId: string; menuItemId: string }) => {
	return await axios.delete('/basket/order/remove', {
		data: itemData
	});
};

export const checkoutBasket = async (basketId: string): Promise<PaymentIntent> => {
	return (await axios.post(`/stripe/basket/${basketId}`)).data;
};

export const submit = async (data: Basket) => {
	return await axios.patch('/basket/submit', data);
};
