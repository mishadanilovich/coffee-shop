import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/components/theme';
import { Footer } from './Footer';

describe('Footer', () => {
	it('renders a labelled, focusable link for each social network', () => {
		render(
			<ThemeProvider>
				<Footer />
			</ThemeProvider>
		);

		expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
			'href',
			'https://www.facebook.com/paragraphcoffee/'
		);
		expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument();
	});
});
