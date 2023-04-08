import { Lesson } from '@/interfaces';

export interface LessonCardProps {
	data: Omit<Lesson, 'id'>;
}
