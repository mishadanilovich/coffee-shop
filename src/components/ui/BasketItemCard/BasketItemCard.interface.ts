import { BasketItem } from '@/types';

export interface BasketItemCardProps {
	data: BasketItem;
	handleIncrease: (basketId: string, menuItemId: string) => void;
	handleDecrease: (basketId: string, menuItemId: string) => void;
}
