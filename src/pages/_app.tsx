import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/theme';
import { PageLoader } from '@/components/ui/PageLoader';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider>
			<>
				<PageLoader />
				<Component {...pageProps} />
			</>
		</ThemeProvider>
	);
};

export default App;
