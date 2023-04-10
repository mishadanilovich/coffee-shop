import { AboutUs, Intro, Lessons, Menu } from './sections';
import { lessons, menu } from './mock';

export const Home = () => (
	<>
		<Intro />
		<AboutUs />
		<Menu menu={menu} />
		<Lessons lessons={lessons} />
	</>
);
