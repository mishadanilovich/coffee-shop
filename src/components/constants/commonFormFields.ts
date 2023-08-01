import { Email, Phone, User as UserIcon } from '@/components/icons';

import { emailReg, phoneReg } from './regex';

export const commonFormFields = {
	contactPhone: {
		id: 'contactPhone' as const,
		type: 'text',
		placeholder: 'Contact phone',
		options: {
			required: 'Contact phone is required',
			pattern: {
				value: phoneReg,
				message: 'Invalid phone format (+375(33)333-33-33)'
			}
		},
		leftIcon: Phone
	},
	email: {
		id: 'email' as const,
		type: 'text',
		placeholder: 'E-mail',
		options: {
			required: 'Email is required',
			pattern: {
				value: emailReg,
				message: 'Invalid email'
			}
		},
		leftIcon: Email
	},
	username: {
		id: 'username' as const,
		type: 'text',
		placeholder: 'Name',
		options: {
			required: 'Name is required'
		},
		leftIcon: UserIcon
	}
};
