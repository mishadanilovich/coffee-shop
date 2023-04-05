import { FC, PropsWithChildren } from 'react';
import { Meta, MetaProps } from '@/components/seo';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC<PropsWithChildren<MetaProps>> = props => {
	const { children, ...metaProps } = props;

	return (
		<>
			<Meta {...metaProps}>
				<Header />
				<main>{children}</main>
				<Footer />
			</Meta>
		</>
	);
};
