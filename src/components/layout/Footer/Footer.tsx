import * as Styled from './Footer.styled';
import { SOCIAL_MEDIA } from '@/components/constants';
import { SocialIcon } from '@/components/ui';

const getSocialMedia = () => {
	return SOCIAL_MEDIA.map((socialMedia, index) => <SocialIcon key={index} {...socialMedia} />);
};

export const Footer = () => {
	return <Styled.Footer>{getSocialMedia()}</Styled.Footer>;
};
