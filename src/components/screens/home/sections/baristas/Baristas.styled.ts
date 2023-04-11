import styled from 'styled-components';

export const Container = styled.section`
	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.section};
`;

export const Content = styled.div`
	width: 100%;
	max-width: 840px;
	margin: 0 auto;
`;
