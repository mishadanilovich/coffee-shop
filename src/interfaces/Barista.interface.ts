import { Name } from './Name.interface';

export interface Barista {
	id: string;
	name: Name;
	avatar?: string;
	quote?: string;
}
