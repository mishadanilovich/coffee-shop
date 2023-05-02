import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	column-gap: ${({ theme }) => theme.spacing(3)};
	width: 100%;
	min-height: 150px;
	padding: ${({ theme }) => theme.spacing(2)};
	border-radius: 10px;
	background: ${({ theme }) => theme.palette.white};
`;

export const ImageContainer = styled.div`
	${({ theme }) => theme.classes.contentCenter};
`;

export const ActionsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing(2)};
	margin-top: auto;
`;

export const ActionsButton = styled.button`
	${({ theme }) => theme.classes.contentCenter};
	cursor: pointer;
	background: transparent;

	& > svg {
		transition: color 0.2s ease-in-out;
	}

	&:hover {
		& > svg {
			color: ${({ theme }) => theme.palette.beige};
		}
	}
`;

export const Counter = styled.span`
	${({ theme }) => theme.typography['20R']};
`;
