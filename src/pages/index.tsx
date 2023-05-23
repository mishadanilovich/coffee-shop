import { GetServerSidePropsContext, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { Home, HomeProps } from '@/components/screens';
import { Layout } from '@/components/layout';
import { checkAuth } from '@/components/utils';
import { User } from '@/interfaces';

import * as Services from '@/services';
import { ROUTE } from '@/components/constants';

interface HomePageProps extends HomeProps {
	fallback?: { [key: string]: User };
}

const HomePage: NextPage<HomePageProps> = ({ fallback, ...homeProps }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<Layout
				title="Home"
				description="We prepare healthy food and desserts. Our baristas make coffee with a soul. And we have breakfast all day."
			>
				<Home {...homeProps} />
			</Layout>
		</SWRConfig>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	try {
		const baristas = await Services.home.getBaristas();
		const lessons = await Services.home.getLessons();
		const blogs = await Services.home.getBlogs();

		return {
			props: {
				fallback: {
					'/user': authProps.user
				},
				baristas,
				lessons,
				blogs
			}
		};
	} catch (err) {
		return {
			props: {
				redirect: {
					destination: ROUTE.BAD_PAGE,
					permanent: false
				}
			}
		};
	}
};

export default HomePage;
