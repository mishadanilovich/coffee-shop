import { Lesson } from '@/types';

export interface LessonCardProps {
	data: Omit<Lesson, 'id'>;
}
