import Link from 'next/link';
import styled from 'styled-components';
import { SocialIconProps } from './SocialIcon.interface';

export const IconLink = styled(Link)<Pick<SocialIconProps, 'href'>>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.spacing(2)};
	position: relative;
	z-index: 0;

	border-radius: 50%;
	border: 1px solid currentColor;

	transition: background-color 0.3s ease;

	${({ href }) => {
		return `cursor: ${href ? 'pointer' : 'default'};`;
	}}

	&:hover {
		background: ${({ theme }) => theme.palette.beige};
	}
`;

export const SvgWrapper = styled.span<Pick<SocialIconProps, 'size' | 'color'>>`
	display: flex;
	align-items: center;

	${({ size }) => `
        width: ${size}px;
        height: ${size}px;
        min-width: ${size}px;
        min-height: ${size}px;
    `}

	color: ${({ color }) => color};

	& > svg {
		height: 100%;
		width: 100%;
	}

	& > svg path {
		fill: currentColor;
	}

	& > svg circle {
		stroke: currentColor;
	}
`;
