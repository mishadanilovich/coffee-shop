import { Blog } from '@/interfaces';

export interface BlogCardProps {
	data: Omit<Blog, 'id'>;
	buttonTitle?: string;
}
