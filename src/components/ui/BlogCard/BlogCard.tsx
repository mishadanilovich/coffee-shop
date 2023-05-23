import Image from 'next/image';
import { Link } from '@/components/ui';

import { BLOG_CARD_LINK_LABEL } from './constants';
import { BlogCardProps } from './BlogCard.interface';
import * as Styled from './BlogCard.styled';

export const BlogCard = ({ data }: BlogCardProps) => {
	const { title, description, img, blogUrl } = data;

	return (
		<Styled.Container>
			<Styled.ImageContainer>
				<Image src={img} alt={title} fill />
			</Styled.ImageContainer>
			<Styled.Content>
				<Styled.Title>{title}</Styled.Title>
				{description && <Styled.Description>{description}</Styled.Description>}
				<Link href={blogUrl}>{BLOG_CARD_LINK_LABEL}</Link>
			</Styled.Content>
		</Styled.Container>
	);
};
