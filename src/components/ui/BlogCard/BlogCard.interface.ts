import { Blog } from '@/types';

export interface BlogCardProps {
	data: Omit<Blog, 'id'>;
	buttonTitle?: string;
}
