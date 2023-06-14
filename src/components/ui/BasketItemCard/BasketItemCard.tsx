import { useState } from 'react';
import { Loader, Minus, Plus } from '@/components/icons';
import { CURRENCY, FALLBACK_MENU_IMAGE_SRC } from '@/components/constants';

import { BasketItemCardProps } from './BasketItemCard.interface';

import * as Styled from './BasketItemCard.styled';

export const BasketItemCard = ({ data, handleIncrease, handleDecrease }: BasketItemCardProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		count,
		menuItem: { price, image, title, description },
		basketId,
		menuItemId
	} = data;

	const [basketImageSrc, setBasketImageSrc] = useState(image || FALLBACK_MENU_IMAGE_SRC);

	const handleIncreaseButton = async (
		onClick: BasketItemCardProps['handleIncrease'] | BasketItemCardProps['handleDecrease']
	) => {
		setIsLoading(true);
		await onClick(basketId, menuItemId);
		setIsLoading(false);
	};

	return (
		<Styled.Container>
			<Styled.StyledImage
				src={basketImageSrc}
				alt={title}
				width={80}
				height={80}
				onError={() => setBasketImageSrc(FALLBACK_MENU_IMAGE_SRC)}
			/>
			<Styled.Content>
				<Styled.Title>{title}</Styled.Title>
				{description && <Styled.Description>{description}</Styled.Description>}
				<Styled.ActionsContainer>
					<Styled.ActionsButton
						disabled={isLoading}
						onClick={() => handleIncreaseButton(handleDecrease)}
					>
						<Minus height={18} width={18} />
					</Styled.ActionsButton>
					{isLoading ? <Loader height={22} width={22} /> : <span>{count}</span>}
					<Styled.ActionsButton
						disabled={isLoading}
						onClick={() => handleIncreaseButton(handleIncrease)}
					>
						<Plus height={18} width={18} />
					</Styled.ActionsButton>
					<Styled.Price>{`${price} ${CURRENCY}`}</Styled.Price>
				</Styled.ActionsContainer>
			</Styled.Content>
		</Styled.Container>
	);
};
