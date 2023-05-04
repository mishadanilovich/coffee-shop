import { BasketItem } from '@/interfaces';

export interface BasketItemCardProps {
	data: BasketItem;
	handleIncrease: (itemId: string) => void;
	handleDecrease: (itemId: string) => void;
}
