import Image from 'next/image';
import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100px;
	z-index: ${({ theme }) => theme.zIndex.header};

	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.contentBetween};
	padding-top: ${({ theme }) => theme.spacing(5)};

	background: ${({ theme }) => theme.palette.black};
	border-bottom: 1px solid ${({ theme }) => theme.palette.white};
`;

export const Logo = styled(Image)`
	cursor: pointer;
	transition: transform 0.6s ease-in-out;

	&:hover {
		transform: rotate(15deg);
	}
`;

export const Actions = styled.div``;
