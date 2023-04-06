import { Button } from '@/components/ui';
import { COFFEE_SHOP_NAME } from '@/components/constants';

import { INTRO_BUTTON_LABEL, INTRO_DESCRIPTION } from './constants';
import * as Styled from './IntroSection.styled';

export const IntroSection = () => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.Title>{COFFEE_SHOP_NAME}</Styled.Title>
				<Styled.Description>{INTRO_DESCRIPTION}</Styled.Description>
				<Button label={INTRO_BUTTON_LABEL} />
			</Styled.Content>
		</Styled.Container>
	);
};
