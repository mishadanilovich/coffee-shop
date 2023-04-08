import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

// Fix types
export const section: FlattenInterpolation<ThemeProps<DefaultTheme>> = css`
	display: flex;
	flex-direction: column;

	text-align: center;

	h1:first-of-type,
	h2:first-of-type {
		margin-bottom: ${({ theme }) => theme.spacing(9)};
	}
`;

export const styledLink: FlattenInterpolation<ThemeProps<DefaultTheme>> = css`
	min-height: 30px;
	width: fit-content;
	background: transparent;
	padding: ${({ theme }) => theme.spacing(2, 8)};

	border: 1px solid ${({ theme }) => theme.palette.border};
	border-radius: 5px;

	transition: all 0.3s linear;

	&:hover {
		color: ${({ theme }) => theme.palette.black};
		background: ${({ theme }) => theme.palette.beige};
	}
`;

export const card: FlattenInterpolation<ThemeProps<DefaultTheme>> = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.palette.border};
	border-radius: 10px;
`;
