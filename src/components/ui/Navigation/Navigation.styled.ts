import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
	${({ theme }) => theme.classes.contentCenter};

	column-gap: 20px;
`;

const navStyles = css`
	${({ theme }) => theme.typography['16R']};
	position: relative;
	transition: color 0.2s linear;

	&::after {
		position: absolute;
		left: 0;
		bottom: 0;
		content: '';
		height: 1px;
		width: 0;
		background: ${({ theme }) => theme.palette.beige};

		transition: width 0.2s linear;
	}
	&:hover {
		color: ${({ theme }) => theme.palette.beige};

		&::after {
			width: 100%;
		}
	}
`;

export const NavLink = styled(Link)`
	${navStyles};
`;
export const NavSpan = styled.span`
	${navStyles};
`;
