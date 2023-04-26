import { css } from 'styled-components';
import { StyledCSS } from '../../types.interface';

// Fix types
export const container: StyledCSS = css`
	padding: ${({ theme }) => theme.spacing(8, 35, 5)};

	@media ${({ theme }) => theme.device.laptop} {
		padding: ${({ theme }) => theme.spacing(8, 25, 5)};
	}

	@media ${({ theme }) => theme.device.tablet} {
		padding: ${({ theme }) => theme.spacing(8, 15, 5)};
	}

	@media ${({ theme }) => theme.device.mobileL} {
		padding: ${({ theme }) => theme.spacing(8, 10, 5)};
	}

	@media ${({ theme }) => theme.device.mobileM} {
		padding: ${({ theme }) => theme.spacing(6, 6, 5)};
	}
`;

export const section: StyledCSS = css`
	display: flex;
	flex-direction: column;

	text-align: center;

	h1:first-of-type,
	h2:first-of-type {
		margin-bottom: ${({ theme }) => theme.spacing(7)};
	}
`;

export const styledLink: StyledCSS = css`
	min-height: 30px;
	width: fit-content;
	background: transparent;
	padding: ${({ theme }) => theme.spacing(2, 8)};

	border: ${({ theme }) => theme.borders.default};
	border-radius: 5px;

	transition: all 0.3s linear;

	&:hover {
		color: ${({ theme }) => theme.palette.black};
		background: ${({ theme }) => theme.palette.beige};
	}
`;

export const card: StyledCSS = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: ${({ theme }) => theme.borders.default};
	border-radius: 10px;
`;
