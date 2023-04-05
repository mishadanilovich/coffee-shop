import styled from 'styled-components';

export const Header = styled.header`
	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.contentBetween};

	border-bottom: 1px solid ${({ theme }) => theme.palette.white};
`;

export const Actions = styled.div``;
