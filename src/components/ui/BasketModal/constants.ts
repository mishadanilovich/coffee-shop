import { Car, Card, Cash, Store } from '@/components/icons';
import { FormField } from '@/components/ui';
import { Basket } from '@/types';
import { commonFormFields } from '@/components/constants';

export const BASKET_TITLE = 'Корзина';
export const BASKET_TOTAL_PRICE_LABEL = 'Цена:';
export const EMPTY_BASKET = 'Пустая корзина';
export const EMPTY_BASKET_ERROR =
	'Пожалуйста, выберите любой напиток или любую еду перед подтверждением заказа';

export const SUCCESSFUL_BASKET_SUBMIT = 'Заказ был успешно принят. Мы ждем вас!';

export const ORDER_DETAILS_FORM_TITLE = 'Детали';
export const ORDER_DETAILS_SUBMIT_BUTTON = 'Заказать';

export const DEFAULT_VALUES = {
	username: '',
	contactPhone: '',
	deliveryMethod: 'inStore',
	paymentMethod: 'cash'
};

export const ORDER_DETAILS_FORM_FIELDS: FormField<Omit<Basket, 'id'>>[] = [
	commonFormFields['username'],
	commonFormFields['contactPhone'],
	{
		id: 'deliveryMethod',
		title: 'Выберите способо доставки',
		options: {
			required: 'Обязательное'
		},
		pickerOptions: [
			{ label: 'В магазине', optionValue: 'inStore', icon: Store },
			{ label: 'Drive-Thru', optionValue: 'driveThru', icon: Car }
		]
	},
	{
		id: 'paymentMethod',
		title: 'Способ оплаты',
		options: {
			required: 'Способ оплаты обязательный'
		},
		pickerOptions: [
			{ label: 'Карта', optionValue: 'card', icon: Card },
			{ label: 'Наличка', optionValue: 'cash', icon: Cash }
		]
	}
];
