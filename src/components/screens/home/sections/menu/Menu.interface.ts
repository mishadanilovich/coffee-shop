interface MenuItem {
	title: string;
	image: string;
	price: number;
	discount?: number;
}

export interface MenuProps {
	menu: MenuItem[];
}
