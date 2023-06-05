import { MenuItem } from '@/types';

export interface BasketItem {
	basketId: string;
	menuItemId: string;
	menuItem: MenuItem;
	price: number;
	count: number;
}

export interface Basket {
	id: string;
	username?: string;
	contactPhone?: string;
	deliveryMethod?: string;
	paymentMethod?: string;
	totalPrice?: number;
	items?: BasketItem[];
}
