import { Basket } from '@/interfaces';

export interface BasketModalProps {
	isOpen: boolean;
	data: Basket;
	handleClose: () => void;
}

export interface OrderDetailsFormData {
	name: string;
	phone: string;
	deliveryMethod: string | null;
	paymentMethod: string | null;
}
