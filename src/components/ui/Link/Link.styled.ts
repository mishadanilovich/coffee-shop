import styled, { css } from 'styled-components';
import NextLink from 'next/link';

import { LinkUse, StyledLinkProps } from './Link.interface';

export const secondaryLink = css`
	background: transparent;
	border: ${({ theme }) => theme.borders.default};
	transition: all 0.3s linear;

	&:hover {
		color: ${({ theme }) => theme.palette.black};
		background: ${({ theme }) => theme.palette.beige};
	}
`;

export const primaryLink = css`
	background: ${({ theme }) => theme.palette.beige};
	transition: all 0.2s linear;

	&:hover {
		transform: translate(2px, -1px);
	}
`;

export const StyledLink = styled(NextLink)<Pick<StyledLinkProps, 'use'>>`
	${({ theme }) => theme.typography['16R']};

	display: flex;
	align-items: center;
	min-height: 30px;
	width: fit-content;
	padding: ${({ theme }) => theme.spacing(2, 8)};
	cursor: pointer;
	border-radius: 5px;

	${({ use }) => (use === LinkUse.primary ? primaryLink : secondaryLink)}

	@media ${({ theme }) => theme.device.mobileL} {
		padding: ${({ theme }) => theme.spacing(1.5, 5)};
	}
`;
