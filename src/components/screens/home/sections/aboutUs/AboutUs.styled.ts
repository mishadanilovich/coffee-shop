import styled from 'styled-components';
import { default as StyledImage } from 'next/image';

export const Container = styled.section`
	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.section};
`;

export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
	position: relative;
	flex: 1 1 450px;
`;

export const Image = styled(StyledImage)`
	width: 100%;
	height: auto;
	border-radius: 10px;
`;

export const Content = styled.div`
	flex: 1 1 450px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing(5, 5, 0)};

	text-align: start;

	@media ${({ theme }) => theme.device.laptop} {
		padding: ${({ theme }) => theme.spacing(5, 0, 0)};
	}

	@media ${({ theme }) => theme.device.tablet} {
		padding: ${({ theme }) => theme.spacing(3, 0, 0)};
	}
`;

export const ContentTitle = styled.h3`
	margin-bottom: ${({ theme }) => theme.spacing(3)};

	@media ${({ theme }) => theme.device.tablet} {
		margin-bottom: ${({ theme }) => theme.spacing(2)};
	}
`;

export const ContentText = styled.p`
	${({ theme }) => theme.typography['16L']};
	color: ${({ theme }) => theme.palette.lightGray};
	margin-bottom: ${({ theme }) => theme.spacing(6)};

	@media ${({ theme }) => theme.device.tablet} {
		margin-bottom: ${({ theme }) => theme.spacing(3)};
	}
`;
