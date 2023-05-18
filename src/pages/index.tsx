import { GetServerSidePropsContext } from 'next';
import { Home } from '@/components/screens';
import { Layout } from '@/components/layout';

import { checkAuth } from '@/components/utils';

const HomePage = () => {
	return (
		<Layout
			title="Home"
			description="We prepare healthy food and desserts. Our baristas make coffee with a soul. And we have breakfast all day."
		>
			<Home />
		</Layout>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	return {
		props: {}
	};
};

export default HomePage;
