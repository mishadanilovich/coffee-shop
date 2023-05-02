import { LinkUse, StyledLinkProps } from './Link.interface';
import * as Styled from './Link.styled';
export const Link = ({ use = LinkUse.primary, children, ...restProps }: StyledLinkProps) => (
	<Styled.StyledLink use={use} {...restProps}>
		{children}
	</Styled.StyledLink>
);
