import styled from 'styled-components';
import NextLink from 'next/link';

export const Page = styled.div`
	${({ theme }) => theme.classes.contentCenter};
	height: 100vh;
	width: 100vw;

	position: relative;

	&::before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.6;
		background-size: cover;
		background: url('/intro.jpeg') no-repeat center;
	}
`;

export const Container = styled.div`
	color: ${({ theme }) => theme.palette.lightBlack};

	width: 100%;
	max-width: 450px;

	background: ${({ theme }) => theme.palette.white};
	border-radius: 10px;

	padding: ${({ theme }) => theme.spacing(5)};
	z-index: ${({ theme }) => theme.zIndex.modal};

	margin: ${({ theme }) => theme.spacing(0, 3)};
`;

export const Header = styled.div`
	display: flex;
	align-items: center;

	position: relative;

	@media ${({ theme }) => theme.device.tablet} {
		& svg {
			height: 24px;
			width: 24px;
		}
	}
`;

export const Link = styled(NextLink)`
	line-height: 0;
	transition: color 0.2s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.palette.beige};
	}
`;

export const Title = styled.h3`
	width: 100%;
	margin-bottom: ${({ theme }) => theme.spacing(4)};

	text-transform: uppercase;
	text-align: center;
`;
