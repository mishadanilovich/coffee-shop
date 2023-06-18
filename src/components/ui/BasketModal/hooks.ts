import { useMemo } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useFetch } from '@/components/hooks';
import { Notification, NotificationType } from '@/components/ui';
import { ERROR_MESSAGE, PAYMENT_METHOD } from '@/components/constants';
import { Basket } from '@/types';

import * as Services from '@/services';

import { EMPTY_BASKET_ERROR, SUCCESSFUL_BASKET_SUBMIT } from './constants';

export const useBasketModal = () => {
	const { GetBasket } = useFetch();
	const { data: basketData, mutate: mutateBasket } = GetBasket();
	const { items: basketItems } = basketData || {};

	const totalPrice = useMemo(
		() => basketItems?.reduce((acc, item) => acc + item.menuItem.price * item.count, 0) ?? 0,
		[basketItems]
	);

	const handleIncrease = async (basketId: string, menuItemId: string) => {
		await Services.basket.addBasketItem({ basketId, menuItemId });

		await mutateBasket();
	};
	const handleDecrease = async (basketId: string, menuItemId: string) => {
		await Services.basket.removeBasketItem({ basketId, menuItemId });

		await mutateBasket();
	};

	return { basketItems, totalPrice, handleDecrease, handleIncrease };
};

export const useBasketPaymentForm = () => {
	const { GetBasket } = useFetch();
	const { data: basketData, mutate: mutateBasket } = GetBasket();

	const stripe = useStripe();
	const elements = useElements();

	const handleBasketSubmit = (handleClose: () => void) => async (data: Omit<Basket, 'id'>) => {
		if (!basketData?.items?.length) {
			return Notification({
				type: NotificationType.failure,
				message: EMPTY_BASKET_ERROR
			});
		}

		try {
			if (stripe && elements && data.paymentMethod === PAYMENT_METHOD.CARD) {
				const checkoutBasket = await Services.basket.checkoutBasket(basketData.id);
				const { client_secret: clientSecret } = checkoutBasket;

				if (clientSecret) {
					const { error } = await stripe.confirmCardPayment(clientSecret, {
						payment_method: {
							card: elements.getElement(CardElement)!,
							billing_details: {
								name: data.username,
								phone: data.contactPhone
							}
						}
					});

					// eslint-disable-next-line max-depth
					if (error) {
						return Notification({
							type: NotificationType.failure,
							message: error.message ?? ERROR_MESSAGE
						});
					}
				}
			}

			await Services.basket.submit({ ...data, id: basketData.id });

			Notification({
				type: NotificationType.success,
				message: SUCCESSFUL_BASKET_SUBMIT
			});

			await mutateBasket();

			handleClose();
		} catch (err) {
			Notification({
				type: NotificationType.failure,
				message: ERROR_MESSAGE
			});
		}
	};

	return { handleBasketSubmit };
};
