import { GetServerSidePropsContext, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { Layout } from '@/components/layout';
import { Menu } from '@/components/screens';
import { checkAuth } from '@/components/utils';
import { User } from '@/interfaces';

interface MenuPageProps {
	fallback?: { [key: string]: User };
}

const MenuPage: NextPage<MenuPageProps> = ({ fallback }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<Layout title="Menu" description="Menu">
				<Menu />
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

export default MenuPage;
