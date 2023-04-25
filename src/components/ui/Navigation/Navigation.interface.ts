export interface NavItem {
	label: string;
	href?: string;
	onClick?: () => void;
	className?: string;
}

export interface NavigationProps {
	navItems: NavItem[];
	className?: string;
}
