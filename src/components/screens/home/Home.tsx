import { AboutUs, Baristas, Blogs, ContactUs, Intro, Lessons, Menu } from './sections';
import { baristas, blogs, lessons, menu } from './mock';

export const Home = () => (
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
