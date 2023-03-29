import { FC, PropsWithChildren } from 'react';
import { Meta, MetaProps } from '@/components/seo';
import { Header } from './header';
import { Footer } from './footer';

export const Layout: FC<PropsWithChildren<MetaProps>> = props => {
	const { children, ...metaProps } = props;

	return (
		<>
			<Meta {...metaProps}>
				<Header />
				{children}
				<Footer />
			</Meta>
		</>
	);
};
