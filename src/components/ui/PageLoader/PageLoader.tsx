import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Loader } from '@/components/icons';

import * as Styled from './PageLoader.styled';
import { LOADING_TEXT } from '@/components/ui/PageLoader/constants';

export const PageLoader = () => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router]);

	useEffect(() => {
		if (loading) document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'overlay';
		};
	}, [loading]);

	return loading ? (
		<Styled.LoaderWrapper>
			{LOADING_TEXT}
			<Loader height={40} width={40} />
		</Styled.LoaderWrapper>
	) : null;
};
