import styled from 'styled-components';

export const Container = styled.div`
	${({ theme }) => theme.classes.container};
`;

export const Menu = styled.div`
	${({ theme }) => theme.classes.section};
`;

export const Title = styled.h2`
	text-transform: uppercase;
`;

export const MenuList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: ${({ theme }) => theme.spacing(4)};
	margin-bottom: ${({ theme }) => theme.spacing(4)};

	@media ${({ theme }) => theme.device.mobileM} {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;
