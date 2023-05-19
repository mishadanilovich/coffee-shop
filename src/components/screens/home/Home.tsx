import { AboutUs, Baristas, Blogs, ContactUs, Intro, Lessons, Menu } from './sections';
import { HomeProps } from './Home.interface';

import { blogs, lessons, menu } from './mock';

export const Home = ({ baristas }: HomeProps) => (
	<>
		<Intro />
		<AboutUs />
		<Menu menu={menu} />
		<Baristas baristas={baristas} />
		<Lessons lessons={lessons} />
		<ContactUs />
		<Blogs blogs={blogs} />
	</>
);
