import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.classes.container};
	display: flex;
	align-items: center;
	padding-top: 0;

	min-height: 100vh;

	background-size: cover;
	background: url('/intro.jpeg') no-repeat center;
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	${({ theme }) => theme.typography['60B']};
	margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Description = styled.p`
	${({ theme }) => theme.typography['20L']};
	margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
