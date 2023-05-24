import { InputFormField } from '@/components/ui';
import { Email, Home, Phone, User as UserIcon } from '@/components/icons';
import { emailReg, phoneReg } from '@/components/constants';

import { ContactUsFormData } from './ContactUs.interface';

export const CONTACT_US_TITLE = ';$Contact; us';

export const SUCCESSFULLY_CONTACT_US = 'The application was accepted, expect a call!';

export const CONTACT_US_FORM_TITLE = 'Contact';
export const CONTACT_US_SUBMIT_BUTTON = 'Contact us now';

export const DEFAULT_VALUES = {
	username: '',
	email: '',
	address: '',
	contactPhone: ''
};

export const CONTACT_US_FORM_FIELDS: InputFormField<ContactUsFormData>[] = [
	{
		id: 'username',
		type: 'text',
		placeholder: 'Name',
		options: {
			required: 'Name is required'
		},
		leftIcon: UserIcon
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
		id: 'address',
		type: 'text',
		placeholder: 'Address',
		leftIcon: Home
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
	}
];
