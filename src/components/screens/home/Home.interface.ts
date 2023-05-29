import { Barista, Blog, Lesson, MenuItem } from '@/types';

export interface HomeProps {
	baristas: Barista[];
	lessons: Lesson[];
	blogs: Blog[];
	menu: MenuItem[];
}
