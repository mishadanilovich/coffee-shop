import styled, { css } from 'styled-components';

export const LabelsContainer = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	gap: ${({ theme }) => theme.spacing(3)};
	margin-bottom: ${({ theme }) => theme.spacing(5)};
	margin-left: auto;
`;

const selectedStyles = css`
	color: ${({ theme }) => theme.palette.beige};

	&::after {
		width: 100%;
	}
`;

export const TabLabel = styled.span<{ selected: boolean }>`
	${({ theme }) => theme.typography['16R']};
	color: ${({ theme }) => theme.palette.lightBlack};

	cursor: pointer;
	transition: color 0.2s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.palette.beige};
	}

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: ${({ theme }) => theme.palette.beige};

		transition: width 0.2s ease-in-out;
	}

	${({ selected }) => selected && selectedStyles};
`;
