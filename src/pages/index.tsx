import { GetServerSidePropsContext, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { Home, HomeProps } from '@/components/screens';
import { Layout } from '@/components/layout';
import { checkAuth } from '@/components/utils';
import { User } from '@/interfaces';

import * as Services from '@/services';

interface HomePageProps extends HomeProps {
	fallback?: { [key: string]: User };
}

const HomePage: NextPage<HomePageProps> = ({ fallback, baristas }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<Layout
				title="Home"
				description="We prepare healthy food and desserts. Our baristas make coffee with a soul. And we have breakfast all day."
			>
				<Home baristas={baristas} />
			</Layout>
		</SWRConfig>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	const baristas = await Services.home.getBaristas();

	return {
		props: {
			fallback: {
				'/user': authProps.user
			},
			baristas
		}
	};
};

export default HomePage;
