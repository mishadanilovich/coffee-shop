import styled, { css } from 'styled-components';
import { Cross as StyledCross } from '@/components/icons';

const scrollStyles = css`
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 6px;
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.palette.lightBlack};
		border-radius: 20px;
	}
`;

const paddingStyle = css`
	padding: ${({ theme }) => theme.spacing(5, 5, 5, 8)};

	@media ${({ theme }) => theme.device.mobileL} {
		padding: ${({ theme }) => theme.spacing(5, 3, 5, 6)};
	}
`;

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
	width: 90%;
	max-width: 900px;
	background: ${({ theme }) => theme.palette.white};
	border-radius: 10px;

	color: ${({ theme }) => theme.palette.lightBlack};

	overflow: hidden;

	@media ${({ theme }) => theme.device.tablet} {
		top: 0;
		left: 0;
		transform: unset;
		width: 100%;
		height: 100%;

		border-radius: unset;

		${scrollStyles};
	}
`;

export const TitleContainer = styled.div`
	${({ theme }) => theme.classes.contentBetween}
	${paddingStyle};
	padding-right: ${({ theme }) => theme.spacing(8)};
	border-bottom: 1px solid ${({ theme }) => theme.palette.lightBlack};

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

	@media ${({ theme }) => theme.device.mobileL} {
		padding-right: ${({ theme }) => theme.spacing(6)};
	}
`;

export const Title = styled.h3`
	text-transform: uppercase;
	letter-spacing: ${({ theme }) => theme.spacing(1)};
`;

export const TotalPrice = styled.span`
	margin-left: auto;
	margin-right: ${({ theme }) => theme.spacing(4)};
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
	flex-wrap: wrap;
	width: 100%;
	column-gap: ${({ theme }) => theme.spacing(5)};
	row-gap: ${({ theme }) => theme.spacing(7)};
`;

export const Basket = styled.div`
	align-self: start;
	flex: 1 1 360px;
	height: 100%;
	max-height: 450px;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing(3)};
	padding-right: ${({ theme }) => theme.spacing(2)};

	${scrollStyles};

	&::-webkit-scrollbar {
		width: 4px;
	}

	@media ${({ theme }) => theme.device.tablet} {
		height: auto;
	}
`;

export const OrderDetails = styled.div`
	display: flex;
	align-items: center;
	flex: 1 1 250px;

	padding-right: ${({ theme }) => theme.spacing(3)};

	.form {
		@media ${({ theme }) => theme.device.mobileL} {
			row-gap: ${({ theme }) => theme.spacing(3.5)};
		}
	}

	.form-title {
		@media ${({ theme }) => theme.device.mobileL} {
			margin-bottom: ${({ theme }) => theme.spacing(1)};
		}
	}
`;
