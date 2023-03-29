import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/components/theme';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
