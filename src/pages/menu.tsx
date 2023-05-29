import { GetServerSidePropsContext, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { User } from '@/types';
import { Layout } from '@/components/layout';
import { Menu } from '@/components/screens';
import { checkAuth } from '@/components/utils';
import { ROUTE } from '@/components/constants';

import * as Services from '@/services';
import { MenuProps } from '@/components/screens/menu/Menu.interface';

interface MenuPageProps extends MenuProps {
	fallback?: { [key: string]: User };
}

const MenuPage: NextPage<MenuPageProps> = ({ fallback, menu }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<Layout title="Menu" description="Menu">
				<Menu menu={menu} />
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
		const menu = await Services.menu.getMenu();

		return {
			props: {
				fallback: {
					'/user': authProps.user
				},
				menu
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

export default MenuPage;
