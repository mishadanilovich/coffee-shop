import styled, { css } from 'styled-components';
import { SocialIconProps } from './SocialIcon.interface';

const iconBorder = css`
	border-radius: 50%;
	border: 1px solid currentColor;
	padding: ${({ theme }) => theme.spacing(2)};
`;

export const Icon = styled.a<Pick<SocialIconProps, 'socialLink' | 'hasBorder'>>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	z-index: 0;

	transition: background-color 0.3s ease;

	${({ socialLink }) => {
		return `cursor: ${socialLink ? 'default' : 'pointer'};`;
	}}

	${({ hasBorder }) => hasBorder && iconBorder}
  
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
