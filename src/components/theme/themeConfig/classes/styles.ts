import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export const section: FlattenInterpolation<ThemeProps<DefaultTheme>> = css`
	display: flex;
	flex-direction: column;

	text-align: center;

	h1:first-of-type,
	h2:first-of-type {
		margin-bottom: ${({ theme }) => theme.spacing(9)};
	}
`;
