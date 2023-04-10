import { Button, Title, TitleType } from '@/components/ui';

import {
	ABOUT_US_CONTENT_TEXT,
	ABOUT_US_CONTENT_TITLE,
	ABOUT_US_TITLE,
	BUTTON_LABEL
} from './constants';
import * as Styled from './AboutUs.styled';

export const AboutUs = () => (
	<Styled.AboutUs>
		<Title type={TitleType.h2} content={ABOUT_US_TITLE} />
		<Styled.ContentContainer>
			<Styled.ImageContainer>
				<Styled.Image src="/about.jpeg" alt="about" width={700} height={500} sizes="100%" />
			</Styled.ImageContainer>
			<Styled.Content>
				<Styled.ContentTitle>{ABOUT_US_CONTENT_TITLE}</Styled.ContentTitle>
				<Styled.ContentText>{ABOUT_US_CONTENT_TEXT}</Styled.ContentText>
				<Button label={BUTTON_LABEL} />
			</Styled.Content>
		</Styled.ContentContainer>
	</Styled.AboutUs>
);
