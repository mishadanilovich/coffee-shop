import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.classes.container};
	display: flex;
	align-items: center;
	padding-top: 0;

	min-height: calc(100vh - 100px);

	background-size: cover;
	background: url('/intro.jpeg') no-repeat center;

	@media ${({ theme }) => theme.device.laptop} {
		min-height: calc(100vh - 85px);
	}

	@media ${({ theme }) => theme.device.mobileL} {
		margin-bottom: ${({ theme }) => theme.spacing(0)};
		justify-content: center;
	}
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;

	@media ${({ theme }) => theme.device.mobileL} {
		align-items: center;
	}
`;

export const Title = styled.h1`
	margin-bottom: ${({ theme }) => theme.spacing(2)};

	@media ${({ theme }) => theme.device.mobileL} {
		margin-bottom: ${({ theme }) => theme.spacing(0)};
	}
`;

export const Description = styled.p`
	${({ theme }) => theme.typography['20L']};
	margin-bottom: ${({ theme }) => theme.spacing(4)};

	@media ${({ theme }) => theme.device.mobileL} {
		margin-bottom: ${({ theme }) => theme.spacing(2.5)};
	}
`;
