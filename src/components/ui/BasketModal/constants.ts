export const BASKET_TITLE = 'Basket';
export const BASKET_TOTAL_PRICE_LABEL = 'Total price:';

import { FormField } from '@/components/ui';
import { Phone, User } from '@/components/icons';

import { OrderDetailsFormData } from './BasketModal.interface';

export const ORDER_DETAILS_FORM_TITLE = 'Details';
export const ORDER_DETAILS_SUBMIT_BUTTON = 'Order now';

export const DEFAULT_VALUES = {
	name: '',
	phone: ''
};

const phoneReg = new RegExp('^\\+375\\((17|29|33|44)\\)[0-9]{3}-[0-9]{2}-[0-9]{2}$');
export const ORDER_DETAILS_FORM_FIELDS: FormField<OrderDetailsFormData>[] = [
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
