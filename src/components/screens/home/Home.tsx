import { AboutUs, Baristas, Blogs, ContactUs, Intro, Lessons, Menu } from './sections';
import { HomeProps } from './Home.interface';

import { useFetch } from '@/components/hooks';

export const Home = ({ baristas, lessons, blogs, menu }: HomeProps) => {
	const { GetUser } = useFetch();
	const { data: user } = GetUser();

	return (
		<>
			<Intro />
			<AboutUs />
			<Menu menu={menu} />
			<Baristas baristas={baristas} />
			<Lessons lessons={lessons} />
			<ContactUs user={user} />
			<Blogs blogs={blogs} />
		</>
	);
};
