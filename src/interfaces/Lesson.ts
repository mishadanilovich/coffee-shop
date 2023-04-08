import { TitleContent } from './Title';

export interface Lesson {
	id: string;
	title: TitleContent;
	description: string;
	lessonUrl?: string;
}
