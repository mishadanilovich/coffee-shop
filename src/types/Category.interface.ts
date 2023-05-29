import { MenuItem } from './MenuItem.interface';

export enum CategoryType {
	coffee = 'coffee',
	breakfast = 'breakfast',
	mouse = 'mouse',
	bruschetta = 'bruschetta',
	croissants = 'croissants',
	salads = 'salads',
	sandwiches = 'sandwiches',
	smoothies = 'smoothies'
}

export interface Category {
	id: string;
	name: string;
	type: CategoryType;
	menu: MenuItem[];
}
