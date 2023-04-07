import Image from 'next/image';
import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 350px;
	padding: ${({ theme }) => theme.spacing(8)};

	border: 1px solid ${({ theme }) => theme.palette.border};
	border-radius: 10px;

	transition: all 0.2s linear;
	&:hover {
		color: ${({ theme }) => theme.palette.black};
		background: ${({ theme }) => theme.palette.lightBeige};
	}
`;

export const MenuImage = styled(Image)`
	border-radius: 50%;
`;

export const Title = styled.h3`
	margin-top: ${({ theme }) => theme.spacing(3)};
	margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Description = styled.p`
	${({ theme }) => theme.typography['16R']};
	margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const BottomContainer = styled.div`
	${({ theme }) => theme.classes.contentBetween};
	width: 100%;
	margin-top: auto;
`;

export const Price = styled.span`
	${({ theme }) => theme.typography['25R']};
`;
