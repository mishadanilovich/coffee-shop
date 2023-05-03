import { Minus, Plus } from '@/components/icons';
import { CURRENCY } from '@/components/constants';

import { BasketItemCardProps } from './BasketItemCard.interface';
import * as Styled from './BasketItemCard.styled';

export const BasketItemCard = ({ data, handleIncrease, handleDecrease }: BasketItemCardProps) => {
	const { count, price, image, title, description, id } = data;

	return (
		<Styled.Container>
			<Styled.StyledImage src={image} alt={title} width={80} height={80} />
			<Styled.Content>
				<Styled.Title>{title}</Styled.Title>
				{description && <Styled.Description>{description}</Styled.Description>}
				<Styled.ActionsContainer>
					<Styled.ActionsButton onClick={() => handleDecrease(id)}>
						<Minus height={18} width={18} />
					</Styled.ActionsButton>
					<span>{count}</span>
					<Styled.ActionsButton onClick={() => handleIncrease(id)}>
						<Plus height={18} width={18} />
					</Styled.ActionsButton>
					<Styled.Price>{`${price} ${CURRENCY}`}</Styled.Price>
				</Styled.ActionsContainer>
			</Styled.Content>
		</Styled.Container>
	);
};
