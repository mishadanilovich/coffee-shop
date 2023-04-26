import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.section`
	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.section};
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: ${({ theme }) => theme.spacing(4)};
	margin-bottom: ${({ theme }) => theme.spacing(4)};

	@media ${({ theme }) => theme.device.mobileS} {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;

export const StyledLink = styled(Link)`
	align-self: center;
	${({ theme }) => theme.classes.styledLink};
`;
