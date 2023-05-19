import { GetServerSidePropsContext, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { Home } from '@/components/screens';
import { Layout } from '@/components/layout';
import { checkAuth } from '@/components/utils';
import { User } from '@/interfaces';

interface HomePageProps {
	fallback?: { [key: string]: User };
}

const HomePage: NextPage<HomePageProps> = ({ fallback }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<Layout
				title="Home"
				description="We prepare healthy food and desserts. Our baristas make coffee with a soul. And we have breakfast all day."
			>
				<Home />
			</Layout>
		</SWRConfig>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	return {
		props: {
			fallback: {
				'/user': authProps.user
			}
		}
	};
};

export default HomePage;
