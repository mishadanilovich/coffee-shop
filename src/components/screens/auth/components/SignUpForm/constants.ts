import { InputFormField } from '@/components/ui';
import { Email, Lock, Phone, User } from '@/components/icons';
import { emailReg, phoneReg } from '@/components/constants';
import { RegisterFromData } from '@/types';

export const SIGN_UP_SUBMIT_BUTTON = 'Sign up';

export const SUCCESSFUL_REGISTRATION = 'Registration is successful!';
export const INVALID_REGISTRATION = 'Error during registration!';

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
		id: 'contactPhone',
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
	{
		id: 'password',
		type: 'password',
		placeholder: 'Password',
		options: {
			required: 'Password is required',
			minLength: {
				value: 10,
				message: 'Password must be longer than or equal to 10 characters'
			}
		},
		leftIcon: Lock
	}
];
