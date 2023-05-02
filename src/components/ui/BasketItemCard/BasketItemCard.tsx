import { Minus, Plus } from '@/components/icons';

import { BasketItemCardProps } from './BasketItemCard.interface';
import * as Styled from './BasketItemCard.styled';

export const BasketItemCard = ({ data, handleIncrease, handleDecrease }: BasketItemCardProps) => {
	const { count, price, image, title, description, id } = data;

	return (
		<Styled.Container>
			<Styled.ImageContainer>BasketItemImage</Styled.ImageContainer>
			<Styled.ActionsContainer>
				<Styled.ActionsButton onClick={() => handleDecrease(id)}>
					<Minus />
				</Styled.ActionsButton>
				<Styled.Counter>{count}</Styled.Counter>
				<Styled.ActionsButton onClick={() => handleIncrease(id)}>
					<Plus />
				</Styled.ActionsButton>
			</Styled.ActionsContainer>
		</Styled.Container>
	);
};
