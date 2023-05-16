import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 450px;

	background: ${({ theme }) => theme.palette.white};
	border-radius: 10px;

	padding: ${({ theme }) => theme.spacing(5)};
`;
