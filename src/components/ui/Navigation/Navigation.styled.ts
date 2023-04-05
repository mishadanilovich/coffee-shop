import Link from 'next/link';
import styled, { css } from 'styled-components';

import { NavItem } from './navigation.interface';

export const Navigation = styled.nav`
	${({ theme }) => theme.classes.contentCenter};

	column-gap: 20px;
`;

const hoverStyles = css`
	color: ${({ theme }) => theme.palette.beige};
	border-bottom: 1px solid ${({ theme }) => theme.palette.beige};
	padding-bottom: ${({ theme }) => theme.spacing(1)};
`;

const navStyles = css`
	${({ theme }) => theme.typography['16R']}
	transition: all 0.2s linear;
	line-height: 1;

	&:hover {
		${hoverStyles};
	}
`;

export const NavLink = styled(Link)<Pick<NavItem, 'isActive'>>`
	${navStyles};

	${({ isActive }) => isActive && hoverStyles};
`;
export const NavSpan = styled.span<Pick<NavItem, 'isActive'>>`
	${navStyles};

	${({ isActive }) => isActive && hoverStyles};
`;
