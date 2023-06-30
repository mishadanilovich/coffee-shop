import { InputFormField } from '@/components/ui';
import { Lock } from '@/components/icons';
import { commonFormFields } from '@/components/constants';
import { LoginFormData } from '@/types';

export const LOGIN_SUBMIT_BUTTON = 'Log in';

export const SUCCESSFUL_LOGIN = 'Authorization is successful!';
export const INVALID_LOGIN = 'Email or password is wrong!';

export const DEFAULT_VALUES = {
	email: '',
	password: ''
};

export const LOGIN_FORM_FIELDS: InputFormField<LoginFormData>[] = [
	commonFormFields['email'],
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
