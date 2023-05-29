import { InputFormField } from '@/components/ui';
import { Email, Lock } from '@/components/icons';
import { emailReg } from '@/components/constants';
import { LoginFormData } from '@/types';

export const LOGIN_SUBMIT_BUTTON = 'Log in';

export const SUCCESSFUL_LOGIN = 'Authorization is successful!';
export const INVALID_LOGIN = 'Email or password is wrong!';

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
			required: 'Email address is required',
			pattern: {
				value: emailReg,
				message: 'Invalid email address'
			}
		},
		leftIcon: Email
	},
	{
		id: 'password',
		type: 'password',
		placeholder: 'Password',
		options: {
			required: 'Password is required'
		},
		leftIcon: Lock
	}
];
