import { Intro, Lessons, Menu } from './sections';
import { lessons, menu } from './mock';

export const Home = () => (
	<>
		<Intro />
		<Menu menu={menu} />
		<Lessons lessons={lessons} />
	</>
);
