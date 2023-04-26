import Image from 'next/image';
import styled from 'styled-components';
import { Navigation as StyledNavigation } from '@/components/ui';

export const Header = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	height: 100px;
	z-index: ${({ theme }) => theme.zIndex.header};

	${({ theme }) => theme.classes.contentBetween};
	padding: ${({ theme }) => theme.spacing(5, 35)};

	background: ${({ theme }) => theme.palette.black};
	border-bottom: 1px solid ${({ theme }) => theme.palette.white};

	@media ${({ theme }) => theme.device.laptop} {
		padding: ${({ theme }) => theme.spacing(4, 25)};
		height: 85px;
	}

	@media ${({ theme }) => theme.device.tablet} {
		padding: ${({ theme }) => theme.spacing(4, 15)};
	}

	@media ${({ theme }) => theme.device.mobileL} {
		padding: ${({ theme }) => theme.spacing(4, 10)};
	}

	@media ${({ theme }) => theme.device.mobileM} {
		padding: ${({ theme }) => theme.spacing(4, 6)};
	}

	@media ${({ theme }) => theme.device.mobileS} {
		padding: ${({ theme }) => theme.spacing(4, 5)};
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
