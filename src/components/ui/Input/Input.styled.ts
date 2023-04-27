import styled, { css } from 'styled-components';

export const InputBox = styled.div<{ error?: string }>`
	display: flex;
	align-items: center;
	background: transparent;
	border: ${({ theme }) => theme.borders.default};
	border-radius: 10px;
	width: 100%;

	position: relative;

	${({ error }) =>
		error &&
		css`
			border: 1px solid ${({ theme }) => theme.palette.red};
		`}

	& > svg {
		width: 20px;
		height: 20px;
		color: ${({ theme }) => theme.palette.lightGray};
		margin-left: ${({ theme }) => theme.spacing(3)};
	}
`;
export const Input = styled.input<{ isLeftIcon?: boolean }>`
	${({ theme }) => theme.typography['16R']};
	line-height: initial;
	width: 100%;
	padding: ${({ theme, isLeftIcon }) => theme.spacing(4.5, 5, 4.5, isLeftIcon ? 3 : 5)};
`;

export const Error = styled.p`
	position: absolute;
	left: 0;
	bottom: -50%;
	transform: translateY(-50%);
	${({ theme }) => theme.typography['13L']};
	color: ${({ theme }) => theme.palette.red};
	margin-top: ${({ theme }) => theme.spacing(1)};
	text-align: start;
`;