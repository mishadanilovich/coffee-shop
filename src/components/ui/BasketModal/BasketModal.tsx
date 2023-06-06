import { useEffect, useMemo } from 'react';
import {
	Form,
	FormTheme,
	ReactPortal,
	BasketItemCard,
	Notification,
	NotificationType
} from '@/components/ui';
import { CURRENCY, ERROR_MESSAGE } from '@/components/constants';
import { Cup } from '@/components/icons';
import { useFetch } from '@/components/hooks';
import { Basket } from '@/types';

import * as Services from '@/services';

import {
	BASKET_TITLE,
	BASKET_TOTAL_PRICE_LABEL,
	DEFAULT_VALUES,
	EMPTY_BASKET,
	EMPTY_BASKET_ERROR,
	ORDER_DETAILS_FORM_FIELDS,
	ORDER_DETAILS_FORM_TITLE,
	ORDER_DETAILS_SUBMIT_BUTTON,
	SUCCESSFUL_BASKET_SUBMIT
} from './constants';
import { BasketModalProps } from './BasketModal.interface';

import * as Styled from './BasketModal.styled';

export const BasketModal = ({ isOpen, handleClose }: BasketModalProps) => {
	const { GetBasket } = useFetch();
	const { data: basketData, mutate: mutateBasket } = GetBasket();

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'overlay';
		};
	}, [isOpen]);

	const { items: basketItems } = basketData || {};

	const totalPrice = useMemo(
		() => basketItems?.reduce((acc, item) => acc + item.menuItem.price * item.count, 0),
		[basketItems]
	);

	if (!isOpen || !basketData) return null;

	const handleIncrease = async (basketId: string, menuItemId: string) => {
		await Services.basket.addBasketItem({ basketId, menuItemId });

		await mutateBasket();
	};
	const handleDecrease = async (basketId: string, menuItemId: string) => {
		await Services.basket.removeBasketItem({ basketId, menuItemId });

		await mutateBasket();
	};

	const handleSubmit = async (data: Omit<Basket, 'id'>) => {
		if (!basketData?.items?.length) {
			return Notification({
				type: NotificationType.failure,
				message: EMPTY_BASKET_ERROR
			});
		}

		try {
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

	return (
		<ReactPortal wrapperId="basket-react-portal">
			<>
				<Styled.ModalOverflow onClick={handleClose} />
				<Styled.Modal>
					<Styled.TitleContainer>
						<Styled.Title>{BASKET_TITLE}</Styled.Title>
						<Styled.TotalPrice>{`${BASKET_TOTAL_PRICE_LABEL} ${totalPrice?.toFixed(
							2
						)} ${CURRENCY}`}</Styled.TotalPrice>
						<Styled.Cross onClick={handleClose} />
					</Styled.TitleContainer>
					<Styled.Content>
						<Styled.Basket empty={!basketItems?.length}>
							{!!basketItems?.length ? (
								basketItems.map((item, index) => (
									<BasketItemCard
										key={index}
										data={item}
										handleDecrease={handleDecrease}
										handleIncrease={handleIncrease}
									/>
								))
							) : (
								<Styled.Empty>
									{EMPTY_BASKET} <Cup width="30px" height="30px" />
								</Styled.Empty>
							)}
						</Styled.Basket>
						<Styled.OrderDetails>
							<Form
								theme={FormTheme.dark}
								title={ORDER_DETAILS_FORM_TITLE}
								fields={ORDER_DETAILS_FORM_FIELDS}
								submitButtonLabel={ORDER_DETAILS_SUBMIT_BUTTON}
								defaultValues={DEFAULT_VALUES}
								onSubmit={handleSubmit}
								isResetToDefault={false}
							/>
						</Styled.OrderDetails>
					</Styled.Content>
				</Styled.Modal>
			</>
		</ReactPortal>
	);
};
