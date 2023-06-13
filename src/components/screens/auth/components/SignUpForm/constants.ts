import { InputFormField } from '@/components/ui';
import { Email, Lock, Phone, User } from '@/components/icons';
import { emailReg, phoneReg } from '@/components/constants';
import { RegisterFromData } from '@/types';

export const SIGN_UP_SUBMIT_BUTTON = 'Sign up';

export const SUCCESSFUL_REGISTRATION = 'Успеная решистрация!';
export const INVALID_REGISTRATION = 'Ошибка при регистрации!';

export const DEFAULT_VALUES = {
	username: '',
	email: '',
	password: '',
	contactPhone: ''
};

export const SIGN_UP_FORM_FIELDS: InputFormField<RegisterFromData>[] = [
	{
		id: 'username',
		type: 'text',
		placeholder: 'Username',
		options: {
			required: 'Имя обязательное'
		},
		leftIcon: User
	},
	{
		id: 'email',
		type: 'text',
		placeholder: 'E-mail',
		options: {
			required: 'Email обязательное',
			pattern: {
				value: emailReg,
				message: 'Неверный email'
			}
		},
		leftIcon: Email
	},
	{
		id: 'contactPhone',
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
	{
		id: 'password',
		type: 'password',
		placeholder: 'Пароль',
		options: {
			required: 'Пароль обязательный',
			minLength: {
				value: 10,
				message: 'Пароль должен быть больше или равен 10 символам'
			}
		},
		leftIcon: Lock
	}
];
