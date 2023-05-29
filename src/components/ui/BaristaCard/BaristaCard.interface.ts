import { Barista } from '@/types';

export interface BaristaCardProps {
	data: Omit<Barista, 'id'>;
}
