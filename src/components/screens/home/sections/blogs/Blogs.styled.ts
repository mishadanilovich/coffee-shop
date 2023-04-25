import styled from 'styled-components';

export const Container = styled.section`
	${({ theme }) => theme.classes.container};
	${({ theme }) => theme.classes.section};
`;

export const SliderContainer = styled.div`
	width: 100%;
`;
