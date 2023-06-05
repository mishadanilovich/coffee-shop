import { Button } from '@/components/ui';
import { CURRENCY } from '@/components/constants';

import { MenuCardProps } from './MenuCard.interface';
import { BUTTON_LABEL } from './constants';

import * as Styled from './MenuCard.styled';

export const MenuCard = ({ data, handleAddButton }: MenuCardProps) => {
	const { id, image, title, description, price } = data;

	return (
		<Styled.Card>
			<Styled.MenuImage src={image} alt={title} width={100} height={100} />
			<Styled.Title>{title}</Styled.Title>
			{description && <Styled.Description>{description}</Styled.Description>}
			<Styled.BottomContainer>
				<Button label={BUTTON_LABEL} onClick={() => handleAddButton(id)} />
				<Styled.Price>{`${price} ${CURRENCY}`}</Styled.Price>
			</Styled.BottomContainer>
		</Styled.Card>
	);
};
