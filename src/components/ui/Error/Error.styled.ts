import styled from 'styled-components';

export const Container = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h3`
	margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Message = styled.p`
	${({ theme }) => theme.typography['20L']};
	color: ${({ theme }) => theme.palette.lightGray};
	margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
