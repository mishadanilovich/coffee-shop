import styled, { css } from 'styled-components';
import { ButtonProps, ButtonUse } from './Button.interface';

const primaryStyles = css`
	background: ${({ theme }) => theme.palette.beige};
`;

const secondaryStyles = css`
	background: transparent;
	border: ${({ theme }) => theme.borders.default};

	&:hover {
		color: ${({ theme }) => theme.palette.black};
		background: ${({ theme }) => theme.palette.beige};
	}
`;

export const Button = styled.button<Pick<ButtonProps, 'use'>>`
	${({ theme }) => theme.typography['16R']};
	${({ use }) => (use === ButtonUse.primary ? primaryStyles : secondaryStyles)};

	position: relative;
	display: flex;
	align-items: center;
	min-height: 30px;
	width: fit-content;
	padding: ${({ theme }) => theme.spacing(2, 8)};
	cursor: pointer;

	border-radius: 5px;
	transition: all 0.2s linear;
	&:hover {
		transform: translate(2px, -1px);
	}
`;

export const LoaderContainer = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	${({ theme }) => theme.classes.contentCenter};
	width: 90%;
	height: 90%;
	background: ${({ theme }) => theme.palette.beige};
`;
