import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layout';
import { Menu } from '@/components/screens';
import { createServerAxios } from '@/core/serverAxios';

import * as Services from '@/services';
import { MenuProps } from '@/components/screens/menu/Menu.interface';

const MenuPage: NextPage<MenuProps> = ({ menu }) => {
	return (
		<Layout title="Menu" description="Menu">
			<Menu menu={menu} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<MenuProps> = async () => {
	const serverAxios = createServerAxios();

	try {
		const menu = await Services.menu.getMenu(serverAxios);

		return {
			props: { menu },
			revalidate: 60
		};
	} catch (err) {
		return {
			props: { menu: [] },
			revalidate: 60
		};
	}
};

export default MenuPage;
