import { css } from 'styled-components';
import { StyledCSS } from '../../types.interface';

// Fix types
export const container: StyledCSS = css`
	padding: ${({ theme }) => theme.spacing(8, 35, 5)};

	@media ${({ theme }) => theme.device.laptop} {
		padding: ${({ theme }) => theme.spacing(8, 25, 5)};
	}

	@media ${({ theme }) => theme.device.tablet} {
		padding: ${({ theme }) => theme.spacing(8, 12, 5)};
	}

	@media ${({ theme }) => theme.device.mobileL} {
		padding: ${({ theme }) => theme.spacing(8, 9, 5)};
	}

	@media ${({ theme }) => theme.device.mobileM} {
		padding: ${({ theme }) => theme.spacing(6, 6, 5)};
	}

	@media ${({ theme }) => theme.device.mobileS} {
		padding: ${({ theme }) => theme.spacing(6, 5, 5)};
	}
`;

export const section: StyledCSS = css`
	display: flex;
	flex-direction: column;

	text-align: center;

	h1:first-of-type,
	h2:first-of-type {
		margin-bottom: ${({ theme }) => theme.spacing(7)};

		@media ${({ theme }) => theme.device.tablet} {
			margin-bottom: ${({ theme }) => theme.spacing(5)};
		}
	}
`;

export const card: StyledCSS = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: ${({ theme }) => theme.borders.default};
	border-radius: 10px;
`;
