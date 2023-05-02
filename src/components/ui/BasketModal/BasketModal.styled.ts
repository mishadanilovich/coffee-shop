import styled, { css } from 'styled-components';
import { Cross as StyledCross } from '@/components/icons';

export const ModalOverflow = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${({ theme }) => theme.zIndex.modalOverflow};

	width: 100vw;
	height: 100vh;
	background: ${({ theme }) => theme.palette.black};
	opacity: 50%;
`;

export const Modal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: ${({ theme }) => theme.zIndex.modal};

	display: flex;
	flex-direction: column;
	max-height: 600px;
	width: 100%;
	max-width: 900px;
	background: ${({ theme }) => theme.palette.white};
	border-radius: 10px;

	color: ${({ theme }) => theme.palette.lightBlack};

	overflow: hidden;
`;

const paddingStyle = css`
	padding: ${({ theme }) => theme.spacing(5, 8)};
`;

export const TitleContainer = styled.div`
	${({ theme }) => theme.classes.contentBetween}
	${paddingStyle};

	position: relative;

	&::after {
		content: '';
		height: 1px;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		background: ${({ theme }) => theme.palette.lightGray};
	}
`;

export const Title = styled.h3`
	text-transform: uppercase;
	letter-spacing: ${({ theme }) => theme.spacing(1)};
`;

export const Cross = styled(StyledCross)`
	cursor: pointer;
	transition: fill 0.2s ease-in-out;

	&:hover {
		fill: ${({ theme }) => theme.palette.beige};
	}
`;

export const Content = styled.div`
	${paddingStyle};

	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	gap: ${({ theme }) => theme.spacing(5)};

	background: ${({ theme }) => theme.palette.lightGray};
`;

export const Basket = styled.div`
	flex: 1 1 60%;
	height: 100%;
	max-height: 450px;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing(3)};
	overflow-y: scroll;
	padding-right: ${({ theme }) => theme.spacing(2)};

	&::-webkit-scrollbar {
		margin-left: ${({ theme }) => theme.spacing(2)};
		width: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.palette.lightBlack};
		border-radius: 20px;
	}
`;

export const OrderDetails = styled.div`
	display: flex;
	align-items: center;
	flex: 1 1 40%;
`;
