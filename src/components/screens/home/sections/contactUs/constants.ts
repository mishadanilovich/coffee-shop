import { InputFormField } from '@/components/ui';
import { Email } from '@/components/icons';
import { commonFormFields } from '@/components/constants';
import { ContactUsData } from '@/types';

export const CONTACT_US_TITLE = ';$Contact; us';

export const SUCCESSFULLY_CONTACT_US = 'The application was accepted, expect a call!';

export const CONTACT_US_FORM_TITLE = 'Contact';
export const CONTACT_US_SUBMIT_BUTTON = 'Contact us now';

export const DEFAULT_VALUES = {
	username: '',
	email: '',
	message: '',
	contactPhone: ''
};

export const CONTACT_US_FORM_FIELDS: InputFormField<ContactUsData>[] = [
	commonFormFields['username'],
	commonFormFields['email'],
	commonFormFields['contactPhone'],
	{
		id: 'message',
		type: 'text',
		placeholder: 'Message',
		leftIcon: Email
	}
];
