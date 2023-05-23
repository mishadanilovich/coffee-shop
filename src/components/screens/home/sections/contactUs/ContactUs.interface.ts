import { User } from '@/interfaces';

export interface ContactUsFormData {
	username: string;
	email: string;
	contactPhone: string;
	address?: string;
}

export interface ContactUsProps {
	user?: User;
}
