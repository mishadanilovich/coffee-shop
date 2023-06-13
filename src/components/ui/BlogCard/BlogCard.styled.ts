import styled from 'styled-components';
import { Link as StyledLink } from '@/components/ui';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 420px;
	border: ${({ theme }) => theme.borders.default};
	border-radius: 10px;
	overflow: hidden;

	&:hover {
		img {
			transform: scale(1.1);
		}
	}
`;

export const ImageContainer = styled.div`
	height: 230px;
	width: 100%;
	position: relative;

	img {
		transition: 0.2s linear;
	}

	@media ${({ theme }) => theme.device.mobileM} {
		height: 180px;
	}
`;

export const Content = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	padding: ${({ theme }) => theme.spacing(5)};
	text-align: start;
`;

export const Title = styled.h4`
	margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`;

export const Description = styled.p`
	${({ theme }) => theme.typography['16R']};
	color: ${({ theme }) => theme.palette.beige};
	margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Link = styled(StyledLink)`
	margin-top: auto;
`;
