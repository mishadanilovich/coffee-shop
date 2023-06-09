import Image from 'next/image';
import styled, { css } from 'styled-components';
import { Basket as StyledStore, User } from '@/components/icons';
import {
	MobileNavigation as StyledMobileNavigation,
	Navigation as StyledNavigation
} from '@/components/ui';

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
	transition: transform 1s ease-in-out;

	&:hover {
		transform: rotate(360deg);
	}

	@media ${({ theme }) => theme.device.laptop} {
		height: 50px;
		width: 50px;
	}
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
	column-gap: ${({ theme }) => theme.spacing(2)};
`;

const actionStyles = css`
	width: 27px;
	height: 27px;
	cursor: pointer;
	transition: color 0.2s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.palette.beige};
	}

	@media ${({ theme }) => theme.device.mobileL} {
		width: 22px;
		height: 22px;
	}
`;

export const StoreContainer = styled.div`
	display: flex;
	position: relative;
`;

export const Counter = styled.span`
	${({ theme }) => theme.typography['13L']};
	position: absolute;
	top: 0;
	right: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: ${({ theme }) => theme.palette.red};

	@media ${({ theme }) => theme.device.mobileL} {
		width: 8px;
		height: 8px;
	}
`;

export const Store = styled(StyledStore)`
	${actionStyles};
`;

export const Username = styled.span`
	${({ theme }) => theme.typography['16L']};
	line-height: 1.6;
`;

export const AvatarContainer = styled.button`
	line-height: 0;
`;

export const Avatar = styled(User)`
	${actionStyles};
`;

export const MobileNavigation = styled(StyledMobileNavigation)`
	display: none;
	${actionStyles};

	@media ${({ theme }) => theme.device.tablet} {
		display: block;
	}
`;
