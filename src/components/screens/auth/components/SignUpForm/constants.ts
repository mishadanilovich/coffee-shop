import { InputFormField } from '@/components/ui';
import { Email, Lock, Phone, User } from '@/components/icons';
import { emailReg, phoneReg } from '@/components/constants';
import { RegisterFromDTO } from '@/api/dto';

export const SIGN_UP_SUBMIT_BUTTON = 'Sign up';

export const DEFAULT_VALUES = {
	username: '',
	email: '',
	password: '',
	contactPhone: ''
};

export const SIGN_UP_FORM_FIELDS: InputFormField<RegisterFromDTO>[] = [
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
		placeholder: 'Contact number',
		options: {
			pattern: {
				value: phoneReg,
				message: 'Invalid phone number format (+375(33)333-33-33)'
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
				message: 'Min 10'
			}
		},
		leftIcon: Lock
	}
];
