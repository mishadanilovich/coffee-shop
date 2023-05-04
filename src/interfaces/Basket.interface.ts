import { MenuItem } from '@/interfaces';

export interface BasketItem extends MenuItem {
	count: number;
}

export interface Basket {
	totalPrice: number;
	items: BasketItem[];
}
