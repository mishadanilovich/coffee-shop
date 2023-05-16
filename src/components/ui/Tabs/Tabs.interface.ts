import { ReactNode } from 'react';

interface Tab {
	id: string;
	label: string;
	children: ReactNode;
}

export interface TabsInterface {
	items: Tab[];
}
