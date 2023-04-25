import { Button } from '@/components/ui';

import { BLOG_CARD_BUTTON_LABEL } from './constants';
import { BlogCardProps } from './BlogCard.interface';
import * as Styled from './BlogCard.styled';
import Image from 'next/image';

export const BlogCard = ({ data }: BlogCardProps) => {
	const { title, description, img } = data;

	return (
		<Styled.Container>
			<Styled.ImageContainer>
				<Image src={img} alt={title} fill />
			</Styled.ImageContainer>
			<Styled.Content>
				<Styled.Title>{title}</Styled.Title>
				{description && <Styled.Description>{description}</Styled.Description>}
				<Button label={BLOG_CARD_BUTTON_LABEL} />
			</Styled.Content>
		</Styled.Container>
	);
};
