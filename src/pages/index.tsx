import { GetStaticProps, NextPage } from 'next';
import { CategoryType } from '@/types';
import { Home, HomeProps } from '@/components/screens';
import { Layout } from '@/components/layout';
import { createServerAxios } from '@/core/serverAxios';

import * as Services from '@/services';

const HomePage: NextPage<HomeProps> = homeProps => {
	return (
		<Layout
			title="Home"
			description="We prepare healthy food and desserts. Our baristas make coffee with a soul. And we have breakfast all day."
		>
			<Home {...homeProps} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const serverAxios = createServerAxios();

	try {
		const { menu } = await Services.menu.getCategory(CategoryType.coffee, serverAxios);
		const baristas = await Services.home.getBaristas(serverAxios);
		const lessons = await Services.home.getLessons(serverAxios);
		const blogs = await Services.home.getBlogs(serverAxios);

		return {
			props: {
				menu,
				baristas,
				lessons,
				blogs
			},
			revalidate: 60
		};
	} catch (err) {
		return {
			props: {
				menu: [],
				baristas: [],
				lessons: [],
				blogs: []
			},
			revalidate: 60
		};
	}
};

export default HomePage;
