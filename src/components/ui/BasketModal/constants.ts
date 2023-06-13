import { Car, Card, Cash, Phone, Store, User } from '@/components/icons';
import { FormField } from '@/components/ui';
import { Basket } from '@/types';

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

const phoneReg = new RegExp('^\\+375\\((17|29|33|44)\\)[0-9]{3}-[0-9]{2}-[0-9]{2}$');
export const ORDER_DETAILS_FORM_FIELDS: FormField<Omit<Basket, 'id'>>[] = [
	{
		id: 'username',
		type: 'text',
		placeholder: 'Имя',
		options: {
			required: 'Имя обязательное'
		},
		leftIcon: User
	},
	{
		id: 'contactPhone',
		type: 'text',
		placeholder: 'Контактный телефон',
		options: {
			required: 'Контактный телефон обязательный',
			pattern: {
				value: phoneReg,
				message: 'Неверный формат телефона (+375(33)333-33-33)'
			}
		},
		leftIcon: Phone
	},
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
