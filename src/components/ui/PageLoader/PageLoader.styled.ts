import styled from 'styled-components';

export const LoaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;

	z-index: ${({ theme }) => theme.zIndex.pageLoader};
	position: fixed;
	background: ${({ theme }) => theme.palette.black};
`;
