import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
	display: flex;
	column-gap: ${({ theme }) => theme.spacing(3)};
	width: 100%;
	padding: ${({ theme }) => theme.spacing(4, 5)};
	border-radius: 10px;
	background: ${({ theme }) => theme.palette.lightBlack};

	color: ${({ theme }) => theme.palette.lightGray};
`;

export const StyledImage = styled(Image)`
	border-radius: 50%;
	border: ${({ theme }) => theme.borders.image};

	@media ${({ theme }) => theme.device.mobileL} {
		height: 75px;
		width: 75px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Title = styled.h4`
	margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const Description = styled.p`
	${({ theme }) => theme.typography['16R']};
	margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ActionsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing(2)};
	margin-top: auto;

	${({ theme }) => theme.typography['20R']};
	line-height: unset;

	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 17px;
	}
`;

export const ActionsButton = styled.button`
	${({ theme }) => theme.classes.contentCenter};
	cursor: pointer;
	background: transparent;
	border: 2px solid ${({ theme }) => theme.palette.lightGray};
	border-radius: 8px;

	&,
	& > svg {
		transition: all 0.2s ease-in-out;
	}

	&:hover {
		border-color: ${({ theme }) => theme.palette.beige};

		& > svg {
			color: ${({ theme }) => theme.palette.beige};
		}
	}

	@media ${({ theme }) => theme.device.mobileL} {
		& > svg {
			height: 16px;
			width: 16px;
		}
	}
`;

export const Price = styled.p`
	margin-left: auto;
`;
