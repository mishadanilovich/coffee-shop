import { Link } from '@/components/ui';
import { ANCHORS, COFFEE_SHOP_NAME, ROUTE } from '@/components/constants';

import { INTRO_LINK_LABEL, INTRO_DESCRIPTION } from './constants';
import * as Styled from './Intro.styled';

export const Intro = () => {
	return (
		<Styled.Container id={ANCHORS.HOME}>
			<Styled.Content>
				<Styled.Title>{COFFEE_SHOP_NAME}</Styled.Title>
				<Styled.Description>{INTRO_DESCRIPTION}</Styled.Description>
				<Link href={ROUTE.MENU}>{INTRO_LINK_LABEL}</Link>
			</Styled.Content>
		</Styled.Container>
	);
};
