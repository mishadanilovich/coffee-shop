import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<StyledThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</StyledThemeProvider>
		</>
	);
};
