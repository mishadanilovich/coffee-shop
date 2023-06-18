import styled from 'styled-components';
import { CardElement as StyledCardElement } from '@stripe/react-stripe-js';

export const Title = styled.h3`
	text-transform: uppercase;
	margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Form = styled.form<{ rowSpacing: number }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: ${({ rowSpacing, theme }) => theme.spacing(rowSpacing)};
	width: 100%;
`;

export const CardElement = styled(StyledCardElement)`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.palette.black};
	border-radius: 10px;
	padding: ${({ theme }) => theme.spacing(2)};
`;
