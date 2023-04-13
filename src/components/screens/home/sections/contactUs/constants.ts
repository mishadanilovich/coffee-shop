import { FormField } from '@/components/ui';
import { Email, Home, Phone, User } from '@/components/icons';
import { TitleTextUse } from '@/interfaces';

import { ContactUsFormData } from './ContactUs.interface';

export const CONTACT_US_TITLE = [
	{
		text: 'Contact',
		use: TitleTextUse.main
	},
	{
		text: 'Us'
	}
];

export const CONTACT_US_FORM_TITLE = 'Contact';
export const CONTACT_US_SUBMIT_BUTTON = 'Contact us now';

export const DEFAULT_VALUES = {
	name: '',
	email: '',
	address: '',
	phone: ''
};

const emailReg = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
const phoneReg = new RegExp('^\\+375\\((17|29|33|44)\\)[0-9]{3}-[0-9]{2}-[0-9]{2}$');
export const CONTACT_US_FORM_FIELDS: FormField<ContactUsFormData>[] = [
	{
		id: 'name',
		type: 'text',
		placeholder: 'Name',
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
		id: 'address',
		type: 'text',
		placeholder: 'Address',
		leftIcon: Home
	},
	{
		id: 'phone',
		type: 'tel',
		placeholder: 'Contact number',
		options: {
			required: 'Contact number is required',
			pattern: {
				value: phoneReg,
				message: 'Invalid phone number format (+375(33)333-33-33)'
			}
		},
		leftIcon: Phone
	}
];
