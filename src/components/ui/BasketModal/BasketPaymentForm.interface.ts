import { User } from '@/types';

export interface BasketPaymentFormProps {
	user?: Partial<Pick<User, 'username' | 'contactPhone'>>;
	handleBasketModalClose: () => void;
}
