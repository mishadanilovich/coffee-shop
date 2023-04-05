import styled from 'styled-components';

export const Footer = styled.footer`
	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.contentCenter};
	column-gap: ${({ theme }) => theme.spacing(2)};
	background: ${({ theme }) => theme.palette.lightBlack};
`;
