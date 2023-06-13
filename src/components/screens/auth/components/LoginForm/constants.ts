import { InputFormField } from '@/components/ui';
import { Email, Lock } from '@/components/icons';
import { emailReg } from '@/components/constants';
import { LoginFormData } from '@/types';

export const LOGIN_SUBMIT_BUTTON = 'Войти';

export const SUCCESSFUL_LOGIN = 'Вы успешно авторизованы!';
export const INVALID_LOGIN = 'Email или пароль неверный!';

export const DEFAULT_VALUES = {
	email: '',
	password: ''
};

export const LOGIN_FORM_FIELDS: InputFormField<LoginFormData>[] = [
	{
		id: 'email',
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
	{
		id: 'password',
		type: 'password',
		placeholder: 'Пароль',
		options: {
			required: 'Пароль обязательный'
		},
		leftIcon: Lock
	}
];
