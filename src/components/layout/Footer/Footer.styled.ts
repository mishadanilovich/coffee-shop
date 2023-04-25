import styled from 'styled-components';

export const Footer = styled.footer`
	${({ theme }) => theme.classes.contentCenter};
	margin-top: ${({ theme }) => theme.spacing(5)};
	padding: ${({ theme }) => theme.spacing(6, 0)};
	column-gap: ${({ theme }) => theme.spacing(2)};
	background: ${({ theme }) => theme.palette.lightBlack};

	@media ${({ theme }) => theme.device.mobileL} {
		margin-top: ${({ theme }) => theme.spacing(2.5)};
	}
`;
