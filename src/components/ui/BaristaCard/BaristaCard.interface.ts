import { Barista } from '@/interfaces';

export interface BaristaCardProps {
	data: Omit<Barista, 'id'>;
}
