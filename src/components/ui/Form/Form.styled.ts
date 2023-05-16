import styled from 'styled-components';

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
