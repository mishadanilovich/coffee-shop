import { Car, Card, Cash, Phone, Store, User } from '@/components/icons';
import { FormField } from '@/components/ui';
import { Basket } from '@/types';

export const BASKET_TITLE = 'Basket';
export const BASKET_TOTAL_PRICE_LABEL = 'Total price:';
export const EMPTY_BASKET = 'Basket is empty';
export const EMPTY_BASKET_ERROR = 'Please choose any drink or dish before confirming the order';

export const SUCCESSFUL_BASKET_SUBMIT =
	'The order was successfully accepted. We are waiting for you!';

export const ORDER_DETAILS_FORM_TITLE = 'Details';
export const ORDER_DETAILS_SUBMIT_BUTTON = 'Order now';

export const DEFAULT_VALUES = {
	username: '',
	contactPhone: '',
	deliveryMethod: 'inStore',
	paymentMethod: 'cash'
};

const phoneReg = new RegExp('^\\+375\\((17|29|33|44)\\)[0-9]{3}-[0-9]{2}-[0-9]{2}$');
export const ORDER_DETAILS_FORM_FIELDS: FormField<Omit<Basket, 'id'>>[] = [
	{
		id: 'username',
		type: 'text',
		placeholder: 'Name',
		options: {
			required: 'Name is required'
		},
		leftIcon: User
	},
	{
		id: 'contactPhone',
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
	},
	{
		id: 'deliveryMethod',
		title: 'Pickup options',
		options: {
			required: 'Required'
		},
		pickerOptions: [
			{ label: 'In store', optionValue: 'inStore', icon: Store },
			{ label: 'Drive-Thru', optionValue: 'driveThru', icon: Car }
		]
	},
	{
		id: 'paymentMethod',
		title: 'Payment method',
		options: {
			required: 'Payment method is required'
		},
		pickerOptions: [
			{ label: 'Card', optionValue: 'card', icon: Card },
			{ label: 'Cash', optionValue: 'cash', icon: Cash }
		]
	}
];
