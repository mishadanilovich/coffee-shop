import { SocialIconProps } from './SocialIcon.interface';
import * as Styled from './SocialIcon.styled';

export const SocialIcon = ({
	className,
	size = 18,
	color = 'white',
	type: IconComponent,
	socialLink,
	hasBorder = true
}: SocialIconProps) => (
	<Styled.Icon className={className} target="_blank" href={socialLink} hasBorder={hasBorder}>
		<Styled.SvgWrapper size={size} color={color}>
			{IconComponent && <IconComponent />}
		</Styled.SvgWrapper>
	</Styled.Icon>
);
