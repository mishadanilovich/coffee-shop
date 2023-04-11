import { TitleContent } from './Title.interface';

export interface Lesson {
	id: string;
	title: TitleContent;
	description: string;
	lessonUrl?: string;
}
