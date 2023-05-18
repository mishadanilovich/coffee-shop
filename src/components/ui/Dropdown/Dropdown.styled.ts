import styled from 'styled-components';

export const DropdownContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing(2)};
	color: ${({ theme }) => theme.palette.lightBlack};
	border-radius: 5px;
	background: ${({ theme }) => theme.palette.white};
	padding: ${({ theme }) => theme.spacing(1.5, 4)};
`;

export const DropdownItem = styled.div`
	${({ theme }) => theme.typography['14R']};

	cursor: pointer;
	position: relative;

	&::after {
		content: '';
		display: flex;
		width: 0;
		height: 2px;
		background: ${({ theme }) => theme.palette.lightBlack};

		transition: width 0.2s ease-in-out;
	}

	&:hover {
		&::after {
			width: 100%;
		}
	}
`;
