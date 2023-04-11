import { AboutUs, Baristas, Intro, Lessons, Menu } from './sections';
import { baristas, lessons, menu } from './mock';

export const Home = () => (
	<>
		<Intro />
		<AboutUs />
		<Menu menu={menu} />
		<Baristas baristas={baristas} />
		<Lessons lessons={lessons} />
	</>
);
