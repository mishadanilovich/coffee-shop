import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

export const Navigation = styled.nav`
	${({ theme }) => theme.classes.contentCenter};

	column-gap: 20px;
`;

const navStyles = css`
	${({ theme }) => theme.typography['16R']};
	position: relative;
	transition: color 0.2s linear;

	&::after {
		position: absolute;
		left: 0;
		bottom: 0;
		content: '';
		height: 1px;
		width: 0;
		background: ${({ theme }) => theme.palette.beige};

		transition: width 0.2s linear;
	}
	&:hover {
		color: ${({ theme }) => theme.palette.beige};

		&::after {
			width: 100%;
		}
	}
`;

export const NavLink = styled(Link)`
	${navStyles};
`;
export const NavSpan = styled.span`
	${navStyles};
`;

export const ModalOverflow = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;
	z-index: ${({ theme }) => theme.zIndex.modalOverflow};

	overflow: hidden;
`;

const openAnimation = keyframes`
	from {
	  right: -100%;
	}
  	to {
	  right: 0;
	}
`;

export const Modal = styled.div`
	position: fixed;
	bottom: 0;
	z-index: ${({ theme }) => theme.zIndex.modal};

	display: flex;
	flex-direction: column;
	row-gap: ${({ theme }) => theme.spacing(2)};
	height: calc(100vh - 100px);
	width: 100%;
	max-width: 200px;
	background: ${({ theme }) => theme.palette.white};
	border-radius: 10px 0 0 10px;
	padding: ${({ theme }) => theme.spacing(3, 5)};

	color: ${({ theme }) => theme.palette.lightBlack};

	box-shadow: -10px 0 20px -8px ${({ theme }) => theme.palette.black};

	animation-name: ${openAnimation};
	animation-duration: 1s;
	animation-fill-mode: forwards;

	@media ${({ theme }) => theme.device.laptop} {
		height: calc(100vh - 85px);
	}
`;
