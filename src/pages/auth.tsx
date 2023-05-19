import { GetServerSidePropsContext, NextPage } from 'next';
import { Meta } from '@/components/seo';
import { Auth } from '@/components/screens';
import { checkAuth } from '@/components/utils';
import { ROUTE } from '@/components/constants';

const AuthPage: NextPage = () => {
	return (
		<Meta title="Authentication" description="Authentication">
			<main>
				<Auth />
			</main>
		</Meta>
	);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if (!('redirect' in authProps)) {
		return {
			redirect: {
				destination: ROUTE.HOME,
				permanent: false
			}
		};
	}

	return {
		props: {}
	};
};

export default AuthPage;
