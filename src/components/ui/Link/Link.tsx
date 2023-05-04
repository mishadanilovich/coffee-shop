import { LinkUse, StyledLinkProps } from './Link.interface';
import * as Styled from './Link.styled';
export const Link = ({ use = LinkUse.primary, children, ...restProps }: StyledLinkProps) => {
	const linkProps = !restProps.href.toString().startsWith('/')
		? { rel: 'noopener noreferrer', target: '_blank' }
		: {};

	return (
		<Styled.StyledLink use={use} {...linkProps} {...restProps}>
			{children}
		</Styled.StyledLink>
	);
};
