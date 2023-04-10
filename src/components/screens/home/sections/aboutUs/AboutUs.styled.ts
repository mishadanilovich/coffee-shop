import styled from 'styled-components';
import { default as StyledImage } from 'next/image';

export const AboutUs = styled.section`
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
`;

export const Content = styled.div`
	flex: 1 1 450px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: ${({ theme }) => theme.spacing(5)};

	text-align: start;
`;

export const ContentTitle = styled.h3`
	font-size: 30px;
	margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const ContentText = styled.p`
	${({ theme }) => theme.typography['16L']};
	color: ${({ theme }) => theme.palette.lightGray};
	margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
