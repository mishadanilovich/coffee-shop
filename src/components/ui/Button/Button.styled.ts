import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	min-height: 30px;
	width: fit-content;
	padding: ${({ theme }) => theme.spacing(2, 8)};
	background: ${({ theme }) => theme.palette.beige};
	cursor: pointer;

	color: ${({ theme }) => theme.palette.white};
	${({ theme }) => theme.typography['16R']};

	border-radius: 4px;
	transition: border-radius 0.2s ease-in-out, transform 0.4s ease-in-out;
	&:hover {
		border-radius: 10px;
		transform: translate(2px, -1px);
	}
`;
