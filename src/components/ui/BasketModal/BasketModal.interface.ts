import { Basket } from '@/types';

export interface BasketModalProps {
	isOpen: boolean;
	data: Basket;
	handleClose: () => void;
}

export interface OrderDetailsFormData {
	username: string;
	contactPhone: string;
	deliveryMethod: string;
	paymentMethod: string;
}
