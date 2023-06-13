import { InputFormField } from '@/components/ui';
import { Email, Phone, User as UserIcon } from '@/components/icons';
import { emailReg, phoneReg } from '@/components/constants';
import { ContactUsData } from '@/types';

export const CONTACT_US_TITLE = ';$Связаться; с нами';

export const SUCCESSFULLY_CONTACT_US = 'The application was accepted, expect a call!';

export const CONTACT_US_FORM_TITLE = 'Связаться';
export const CONTACT_US_SUBMIT_BUTTON = 'Связаться';

export const DEFAULT_VALUES = {
	username: '',
	email: '',
	message: '',
	contactPhone: ''
};

export const CONTACT_US_FORM_FIELDS: InputFormField<ContactUsData>[] = [
	{
		id: 'username',
		type: 'text',
		placeholder: 'Имя',
		options: {
			required: 'Имя обязательное'
		},
		leftIcon: UserIcon
	},
	{
		id: 'email',
		type: 'text',
		placeholder: 'E-mail',
		options: {
			required: 'E-mail обязательный',
			pattern: {
				value: emailReg,
				message: 'Неправильный почтовый адрес'
			}
		},
		leftIcon: Email
	},
	{
		id: 'contactPhone',
		type: 'text',
		placeholder: 'Контактный телефон',
		options: {
			required: 'Контактный телефон обязательный',
			pattern: {
				value: phoneReg,
				message: 'Неправильный формат телефона (+375(33)333-33-33)'
			}
		},
		leftIcon: Phone
	},
	{
		id: 'message',
		type: 'text',
		placeholder: 'Сообщение',
		leftIcon: Email
	}
];
