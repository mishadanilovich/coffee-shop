import { BasketItem } from '@/types';

export interface BasketItemCardProps {
	data: BasketItem;
	handleIncrease: (itemId: string) => void;
	handleDecrease: (itemId: string) => void;
}
