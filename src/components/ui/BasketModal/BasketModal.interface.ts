import { User } from '@/types';

export interface BasketModalProps {
	user?: Partial<Pick<User, 'username' | 'contactPhone'>>;
	isOpen: boolean;
	handleClose: () => void;
}
