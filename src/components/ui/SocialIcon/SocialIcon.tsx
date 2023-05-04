import { SocialIconProps } from './SocialIcon.interface';
import * as Styled from './SocialIcon.styled';

export const SocialIcon = ({
	className,
	size = 18,
	color = 'white',
	type: IconComponent,
	href
}: SocialIconProps) => (
	<Styled.IconLink className={className} rel="noopener noreferrer" target="_blank" href={href}>
		<Styled.SvgWrapper size={size} color={color}>
			{IconComponent && <IconComponent />}
		</Styled.SvgWrapper>
	</Styled.IconLink>
);
