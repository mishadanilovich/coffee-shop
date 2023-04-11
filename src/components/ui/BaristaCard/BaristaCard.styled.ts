import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 370px;
	padding: ${({ theme }) => theme.spacing(7.5, 5, 9)};

	cursor: default;
	border: ${({ theme }) => theme.borders.default};
	border-radius: 10px;
`;

export const Quote = styled.p`
	${({ theme }) => theme.typography['16L']};
	color: ${({ theme }) => theme.palette.lightGray};
	line-height: 1.8;

	max-width: 90%;
	margin: ${({ theme }) => theme.spacing(5, 0)};
`;

export const Avatar = styled(Image)`
	margin-top: auto;
	margin-bottom: ${({ theme }) => theme.spacing(3)};
	border-radius: 50%;
`;
