import { useState } from 'react';
import { Button } from '@/components/ui';
import { CURRENCY } from '@/components/constants';

import { MenuCardProps } from './MenuCard.interface';
import { BUTTON_LABEL, FALLBACK_SRC } from './constants';

import * as Styled from './MenuCard.styled';

export const MenuCard = ({ data, handleAddButton }: MenuCardProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const { id, image, title, description, price } = data;

	const [menuImageSrc, setMenuImageSrc] = useState(image || FALLBACK_SRC);

	const handleButtonClick = async () => {
		setIsLoading(true);
		await handleAddButton(id);
		setIsLoading(false);
	};

	return (
		<Styled.Card>
			<Styled.MenuImage
				src={menuImageSrc}
				alt={title}
				width={100}
				height={100}
				onError={() => setMenuImageSrc(FALLBACK_SRC)}
			/>
			<Styled.Title>{title}</Styled.Title>
			{description && <Styled.Description>{description}</Styled.Description>}
			<Styled.BottomContainer>
				<Button isLoading={isLoading} label={BUTTON_LABEL} onClick={handleButtonClick} />
				<Styled.Price>{`${price} ${CURRENCY}`}</Styled.Price>
			</Styled.BottomContainer>
		</Styled.Card>
	);
};
