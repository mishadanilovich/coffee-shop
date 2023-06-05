import { MenuItem } from '@/types';

export interface MenuCardProps {
	data: MenuItem;
	handleAddButton: (menuId: string) => void;
}
