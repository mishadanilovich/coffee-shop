import styled, { css } from 'styled-components';
import { DataPickerProps } from '@/components/ui';

export const Container = styled.div`
	width: 100%;

	position: relative;
`;

export const Title = styled.span`
	${({ theme }) => theme.typography['14R']};
`;

export const OptionsContainer = styled.div<Pick<DataPickerProps, 'error'>>`
	overflow: hidden;
	display: flex;
	align-items: center;
	border: ${({ theme }) => theme.borders.lightBlack};
	border-radius: 10px;
	transition: border 0.2s ease-in-out;

	${({ error }) =>
		error &&
		css`
			border: ${({ theme }) => theme.borders.error};
		`}
`;

export const Option = styled.button<{ selected: boolean }>`
	${({ theme }) => theme.typography['13L']};

	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	row-gap: ${({ theme }) => theme.spacing(1)};

	padding: ${({ theme }) => theme.spacing(1, 3)};

	&:not(:last-of-type) {
		border-right: ${({ theme }) => theme.borders.lightBlack};
	}

	transition: background-color 0.2s ease-in-out;

	${({ selected }) =>
		selected &&
		css`
			background: ${({ theme }) => theme.palette.beige};
		`};
`;

export const Error = styled.p`
	position: absolute;
	left: 0;
	bottom: -50%;
	transform: translateY(-100%);
	${({ theme }) => theme.typography['13L']};
	color: ${({ theme }) => theme.palette.red};
	text-align: start;
`;
