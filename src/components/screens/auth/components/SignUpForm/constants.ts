import { InputFormField } from '@/components/ui';
import { Email, Lock, User } from '@/components/icons';
import { emailReg } from '@/components/constants';

import { SignUpFormData } from './SignUpForm.interface';

export const SIGN_UP_SUBMIT_BUTTON = 'Sign up';

export const DEFAULT_VALUES = {
	username: '',
	email: '',
	password: ''
};

export const SIGN_UP_FORM_FIELDS: InputFormField<SignUpFormData>[] = [
	{
		id: 'username',
		type: 'text',
		placeholder: 'Username',
		options: {
			required: 'Name is required'
		},
		leftIcon: User
	},
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
			required: 'Password is required',
			minLength: {
				value: 10,
				message: 'Min 10'
			}
		},
		leftIcon: Lock
	}
];
