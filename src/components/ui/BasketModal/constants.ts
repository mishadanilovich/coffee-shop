import { Car, Card, Cash, Store } from '@/components/icons';
import { FormField } from '@/components/ui';
import { Basket } from '@/types';
import { commonFormFields, DELIVERY_METHOD, PAYMENT_METHOD } from '@/components/constants';

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
	deliveryMethod: DELIVERY_METHOD.IN_STORE,
	paymentMethod: PAYMENT_METHOD.CASH
};

export const ORDER_DETAILS_FORM_FIELDS: FormField<Omit<Basket, 'id'>>[] = [
	commonFormFields['username'],
	commonFormFields['contactPhone'],
	{
		id: 'deliveryMethod',
		title: 'Pickup options',
		options: {
			required: 'Required'
		},
		pickerOptions: [
			{ label: 'In store', optionValue: DELIVERY_METHOD.IN_STORE, icon: Store },
			{ label: 'Drive-Thru', optionValue: DELIVERY_METHOD.DRIVE_THRU, icon: Car }
		]
	},
	{
		id: 'paymentMethod',
		title: 'Payment method',
		options: {
			required: 'Payment method is required'
		},
		pickerOptions: [
			{ label: 'Card', optionValue: PAYMENT_METHOD.CARD, icon: Card },
			{ label: 'Cash', optionValue: PAYMENT_METHOD.CASH, icon: Cash }
		]
	},
	{
		id: 'card-element',
		isCard: true,
		options: {
			hidePostalCode: true
		},
		relatedField: {
			field: 'paymentMethod',
			value: PAYMENT_METHOD.CARD
		}
	}
];
