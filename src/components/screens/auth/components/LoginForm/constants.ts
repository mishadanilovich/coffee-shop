import { InputFormField } from '@/components/ui';
import { Lock } from '@/components/icons';
import { commonFormFields } from '@/components/constants';
import { LoginFormData } from '@/types';

export const LOGIN_SUBMIT_BUTTON = 'Войти';

export const SUCCESSFUL_LOGIN = 'Вы успешно авторизованы!';
export const INVALID_LOGIN = 'Email или пароль неверный!';

export const DEFAULT_VALUES = {
	email: '',
	password: ''
};

export const LOGIN_FORM_FIELDS: InputFormField<LoginFormData>[] = [
	commonFormFields['email'],
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
