import { useEffect } from 'react';
import { ReactPortal, BasketItemCard, PaymentGateway } from '@/components/ui';
import { CURRENCY } from '@/components/constants';
import { Cup } from '@/components/icons';

import { useBasketModal } from './hooks';
import { BasketPaymentForm } from './BasketPaymentForm';
import { BASKET_TITLE, BASKET_TOTAL_PRICE_LABEL, EMPTY_BASKET } from './constants';
import { BasketModalProps } from './BasketModal.interface';

import * as Styled from './BasketModal.styled';

export const BasketModal = ({ isOpen, handleClose, user }: BasketModalProps) => {
	const { basketItems, totalPrice, handleDecrease, handleIncrease } = useBasketModal();

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'overlay';
		};
	}, [isOpen]);

	if (!isOpen) return null;

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
							<PaymentGateway>
								<BasketPaymentForm
									handleBasketModalClose={handleClose}
									user={user}
								/>
							</PaymentGateway>
						</Styled.OrderDetails>
					</Styled.Content>
				</Styled.Modal>
			</>
		</ReactPortal>
	);
};
