import { InputFormField } from '@/components/ui';
import { Lock } from '@/components/icons';
import { commonFormFields } from '@/components/constants';
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
	commonFormFields['username'],
	commonFormFields['email'],
	commonFormFields['contactPhone'],
	{
		id: 'password',
		type: 'password',
		placeholder: 'Password',
		options: {
			required: 'Password is required',
			minLength: {
				value: 10,
				message: 'The password must be greater than or equal to 10 characters'
			}
		},
		leftIcon: Lock
	}
];
