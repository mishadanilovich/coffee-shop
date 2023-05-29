import { MenuItem } from '@/types';

export interface BasketItem extends MenuItem {
	count: number;
}

export interface Basket {
	totalPrice: number;
	items: BasketItem[];
}
