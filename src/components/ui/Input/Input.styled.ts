import styled, { css } from 'styled-components';

import { InputProps, InputUse } from './Input.interface';

const primaryStyles = css`
	background: transparent;
	border: ${({ theme }) => theme.borders.default};

	& > svg {
		color: ${({ theme }) => theme.palette.lightGray};
	}
`;

const secondaryStyles = css`
	color: ${({ theme }) => theme.palette.white};
	background: ${({ theme }) => theme.palette.lightBlack};
	border: ${({ theme }) => theme.borders.lightBlack};

	& > svg {
		color: ${({ theme }) => theme.palette.lightGray};
	}
`;

export const InputBox = styled.div<Pick<InputProps, 'error' | 'use'>>`
	display: flex;
	align-items: center;
	border-radius: 10px;
	width: 100%;

	position: relative;

	transition: border 0.2s ease-in-out;

	& > svg {
		width: 20px;
		height: 20px;
		margin-left: ${({ theme }) => theme.spacing(3)};
	}

	${({ use }) => (use === InputUse.primary ? primaryStyles : secondaryStyles)};

	${({ error }) =>
		error &&
		css`
			margin-bottom: ${({ theme }) => theme.spacing(2)};
			border: ${({ theme }) => theme.borders.error};
		`}
`;
export const Input = styled.input<{ isLeftIcon?: boolean }>`
	${({ theme }) => theme.typography['16R']};
	line-height: initial;
	letter-spacing: ${({ theme }) => theme.spacing(0.15)};
	width: 100%;
	padding: ${({ theme, isLeftIcon }) => theme.spacing(4.5, 5, 4.5, isLeftIcon ? 3 : 5)};
`;

export const Error = styled.p`
	position: absolute;
	left: 0;
	top: 100%;
	${({ theme }) => theme.typography['13L']};
	color: ${({ theme }) => theme.palette.red};
	text-align: start;
`;
