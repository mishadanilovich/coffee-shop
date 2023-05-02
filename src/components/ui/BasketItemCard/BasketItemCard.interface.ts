import { MenuItem } from '@/interfaces';

export interface BasketItemCardProps {
	data: MenuItem;
	handleIncrease: (itemId: string) => void;
	handleDecrease: (itemId: string) => void;
}
