import { Button } from '@/components/ui';
import { CURRENCY } from '@/components/constants';
import { MenuCardProps } from './MenuCard.interface';
import { BUTTON_LABEL } from './constants';

import * as Styled from './MenuCard.styled';

export const MenuCard = ({ image, title, description, price }: MenuCardProps) => {
	return (
		<Styled.Card>
			<Styled.MenuImage src={image} alt={title} width={100} height={100} />
			<Styled.Title>{title}</Styled.Title>
			{description && <Styled.Description>{description}</Styled.Description>}
			<Styled.BottomContainer>
				<Button label={BUTTON_LABEL} />
				<Styled.Price>{`${price} ${CURRENCY}`}</Styled.Price>
			</Styled.BottomContainer>
		</Styled.Card>
	);
};
