import { ReactElement } from 'react';

export interface DropdownItem {
	label: string;
	onClick?: () => void;
}

export interface DropdownProps {
	content: DropdownItem[];
	children: ReactElement;
}
