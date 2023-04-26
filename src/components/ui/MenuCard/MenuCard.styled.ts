import Image from 'next/image';
import styled from 'styled-components';

export const Card = styled.div`
	${({ theme }) => theme.classes.card};
	min-height: 350px;
	padding: ${({ theme }) => theme.spacing(8)};

	transition: all 0.3s linear;
	&:hover {
		color: ${({ theme }) => theme.palette.black};
		background: ${({ theme }) => theme.palette.lightBeige};

		& > p {
			color: ${({ theme }) => theme.palette.black};
		}
	}

	@media ${({ theme }) => theme.device.mobileL} {
		min-height: 320px;
		padding: ${({ theme }) => theme.spacing(5)};
	}
`;

export const MenuImage = styled(Image)`
	border-radius: 50%;
	border: ${({ theme }) => theme.borders.image};

	@media ${({ theme }) => theme.device.mobileM} {
		height: 90px;
		width: 90px;
	}
`;

export const Title = styled.h3`
	text-transform: uppercase;
	margin-top: ${({ theme }) => theme.spacing(3)};
	margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Description = styled.p`
	${({ theme }) => theme.typography['16L']};
	color: ${({ theme }) => theme.palette.lightGray};
	margin-bottom: ${({ theme }) => theme.spacing(6)};
	transition: color 0.3s linear;
`;

export const BottomContainer = styled.div`
	${({ theme }) => theme.classes.contentBetween};
	width: 100%;
	margin-top: auto;
`;

export const Price = styled.span`
	${({ theme }) => theme.typography['25R']};
`;
