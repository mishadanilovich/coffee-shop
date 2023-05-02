import { MenuItem } from '@/interfaces';
import { DEFAULT_VALUES } from './constants';

export interface BasketModalProps {
	isOpen: boolean;
	data: MenuItem[];
	handleClose: () => void;
}

export type OrderDetailsFormData = typeof DEFAULT_VALUES;
