import { useEffect } from 'react';
import { Form, FormTheme, ReactPortal, BasketItemCard } from '@/components/ui';

import {
	BASKET_TITLE,
	DEFAULT_VALUES,
	ORDER_DETAILS_FORM_FIELDS,
	ORDER_DETAILS_FORM_TITLE,
	ORDER_DETAILS_SUBMIT_BUTTON
} from './constants';
import { basket } from './mock';
import { BasketModalProps, OrderDetailsFormData } from './BasketModal.interface';
import * as Styled from './BasketModal.styled';

export const BasketModal = ({ isOpen, handleClose }: BasketModalProps) => {
	const onFormSubmit = (data: OrderDetailsFormData) => {
		console.log(data);
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
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
						<Styled.Cross onClick={handleClose} />
					</Styled.TitleContainer>
					<Styled.Content>
						<Styled.Basket>
							{basket.items.map((item, index) => (
								<BasketItemCard
									key={index}
									data={item}
									handleDecrease={() => {}}
									handleIncrease={() => {}}
								/>
							))}
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
