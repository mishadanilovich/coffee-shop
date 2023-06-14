import { Email, Phone, User as UserIcon } from '@/components/icons';

import { emailReg, phoneReg } from './regex';

export const commonFormFields = {
	contactPhone: {
		id: 'contactPhone' as const,
		type: 'text',
		placeholder: 'Контактный телефон',
		options: {
			required: 'Контактный телефон обязательный',
			pattern: {
				value: phoneReg,
				message: 'Неверный формат телефона (+375(33)333-33-33)'
			}
		},
		leftIcon: Phone
	},
	email: {
		id: 'email' as const,
		type: 'text',
		placeholder: 'E-mail',
		options: {
			required: 'Email обязательный',
			pattern: {
				value: emailReg,
				message: 'Неверный email'
			}
		},
		leftIcon: Email
	},
	username: {
		id: 'username' as const,
		type: 'text',
		placeholder: 'Имя',
		options: {
			required: 'Имя обязательное'
		},
		leftIcon: UserIcon
	}
};
