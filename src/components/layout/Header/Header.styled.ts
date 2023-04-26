import Image from 'next/image';
import styled from 'styled-components';
import { Navigation as StyledNavigation } from '@/components/ui';

export const Header = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	height: 100px;
	z-index: ${({ theme }) => theme.zIndex.header};

	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.contentBetween};
	padding-top: ${({ theme }) => theme.spacing(5)};
	padding-bottom: ${({ theme }) => theme.spacing(5)};

	background: ${({ theme }) => theme.palette.black};
	border-bottom: 1px solid ${({ theme }) => theme.palette.white};

	@media ${({ theme }) => theme.device.laptop} {
		padding-top: ${({ theme }) => theme.spacing(4)};
		padding-bottom: ${({ theme }) => theme.spacing(4)};
		height: 85px;
	}
`;

export const Navigation = styled(StyledNavigation)`
	@media ${({ theme }) => theme.device.tablet} {
		display: none;
	}
`;

export const Logo = styled(Image)`
	cursor: pointer;
	transition: transform 0.6s ease-in-out;

	&:hover {
		transform: rotate(15deg);
	}

	@media ${({ theme }) => theme.device.laptop} {
		height: 50px;
		width: 50px;
	}
`;

export const Actions = styled.div``;
