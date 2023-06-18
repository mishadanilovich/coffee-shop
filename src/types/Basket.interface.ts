import { MenuItem } from '@/types';
import { PAYMENT_METHOD } from '@/components/constants';

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
	paymentMethod?: PAYMENT_METHOD;
	totalPrice?: number;
	items?: BasketItem[];
}
