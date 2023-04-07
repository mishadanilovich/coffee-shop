import { Intro, Menu } from './sections';
import { menu } from './mock';

export const Home = () => (
	<>
		<Intro />
		<Menu data={menu} />
	</>
);
