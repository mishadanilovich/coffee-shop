import { FormField } from '@/components/ui';
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
		type: 'text',
		placeholder: 'Name',
		id: 'name',
		options: {
			required: 'Name is required'
		}
	},
	{
		type: 'text',
		placeholder: 'E-mail',
		id: 'email',
		options: {
			required: 'Email address is required',
			pattern: {
				value: emailReg,
				message: 'Invalid email address'
			}
		}
	},
	{
		type: 'text',
		placeholder: 'Address',
		id: 'address'
	},
	{
		type: 'tel',
		placeholder: 'Contact number',
		id: 'phone',
		options: {
			required: 'Contact number is required',
			pattern: {
				value: phoneReg,
				message: 'Invalid phone number format (+375(33)333-33-33)'
			}
		}
	}
];
