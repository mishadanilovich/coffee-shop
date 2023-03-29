import { FC, PropsWithChildren } from 'react';
import { MetaProps } from './meta.interface';
import Head from 'next/head';
import { getMetaTitle } from '@/components/utils';

export const Meta: FC<PropsWithChildren<MetaProps>> = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{getMetaTitle(title)}</title>
				{description ? (
					<>
						<meta name="description" content={description} />
						<meta name="og:title" content={getMetaTitle(title)} />
						<meta name="og:description" content={description} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.ico" />
			</Head>
			{children}
		</>
	);
};
