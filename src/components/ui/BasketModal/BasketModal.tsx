import { useEffect } from 'react';
import { Form, FormTheme, ReactPortal, BasketItemCard } from '@/components/ui';
import { CURRENCY } from '@/components/constants';
import { Cup } from '@/components/icons';

import {
	BASKET_TITLE,
	BASKET_TOTAL_PRICE_LABEL,
	DEFAULT_VALUES,
	EMPTY_BASKET,
	ORDER_DETAILS_FORM_FIELDS,
	ORDER_DETAILS_FORM_TITLE,
	ORDER_DETAILS_SUBMIT_BUTTON
} from './constants';
import { BasketModalProps, OrderDetailsFormData } from './BasketModal.interface';
import * as Styled from './BasketModal.styled';

export const BasketModal = ({ isOpen, data: basketData, handleClose }: BasketModalProps) => {
	const onFormSubmit = (data: OrderDetailsFormData) => {
		console.log({ ...data, ...basketData });
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const { items: basketItems, totalPrice } = basketData;
	return (
		<ReactPortal wrapperId="basket-react-portal">
			<>
				<Styled.ModalOverflow onClick={handleClose} />
				<Styled.Modal>
					<Styled.TitleContainer>
						<Styled.Title>{BASKET_TITLE}</Styled.Title>
						<Styled.TotalPrice>{`${BASKET_TOTAL_PRICE_LABEL} ${totalPrice} ${CURRENCY}`}</Styled.TotalPrice>
						<Styled.Cross onClick={handleClose} />
					</Styled.TitleContainer>
					<Styled.Content>
						<Styled.Basket empty={!basketItems.length}>
							{basketItems.length ? (
								basketItems.map((item, index) => (
									<BasketItemCard
										key={index}
										data={item}
										handleDecrease={() => {}}
										handleIncrease={() => {}}
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
								onSubmit={onFormSubmit}
							/>
						</Styled.OrderDetails>
					</Styled.Content>
				</Styled.Modal>
			</>
		</ReactPortal>
	);
};
