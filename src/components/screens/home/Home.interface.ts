import { Barista, Blog, Lesson } from '@/interfaces';

export interface HomeProps {
	baristas: Barista[];
	lessons: Lesson[];
	blogs: Blog[];
}
