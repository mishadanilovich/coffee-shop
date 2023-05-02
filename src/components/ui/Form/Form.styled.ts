import styled from 'styled-components';

export const Title = styled.h3`
	text-transform: uppercase;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: ${({ theme }) => theme.spacing(7)};
	width: 100%;
`;
