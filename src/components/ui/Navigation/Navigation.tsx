import { NavigationProps, NavItem } from './Navigation.interface';

import * as Styled from './Navigation.styled';

const NavItem = ({ href, label, ...rest }: NavItem) => {
	return href ? (
		<Styled.NavLink href={href} {...rest} scroll={false}>
			{label}
		</Styled.NavLink>
	) : (
		<Styled.NavSpan {...rest}>{label}</Styled.NavSpan>
	);
};

export const Navigation = ({ navItems, className }: NavigationProps) => {
	return (
		<Styled.Navigation className={className}>
			{navItems.map(item => {
				return <NavItem key={item.label} {...item} />;
			})}
		</Styled.Navigation>
	);
};
