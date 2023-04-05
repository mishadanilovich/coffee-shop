export interface NavItem {
	label: string;
	href?: string;
	onClick?: () => void;
	className?: string;
	isActive?: boolean;
}

export interface NavigationProps {
	navItems: NavItem[];
}
