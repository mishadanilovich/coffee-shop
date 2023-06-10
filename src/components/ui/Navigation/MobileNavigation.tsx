import { useState } from 'react';
import { ReactPortal } from '@/components/ui';
import { Menu } from '@/components/icons';

import { NavigationProps, NavItem } from './Navigation.interface';

import * as Styled from './Navigation.styled';

export const MobileNavigation = ({ navItems, className }: NavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(prevState => !prevState);

	const NavItem = ({ href, label, onClick, ...rest }: NavItem) => {
		const handleNavClick = () => {
			onClick?.();
			handleClose();
		};

		return href ? (
			<Styled.NavLink href={href} onClick={handleNavClick} {...rest} scroll={false}>
				{label}
			</Styled.NavLink>
		) : (
			<Styled.NavSpan onClick={handleNavClick} {...rest}>
				{label}
			</Styled.NavSpan>
		);
	};

	return (
		<>
			<Menu className={className} onClick={handleClose} />
			{isOpen && (
				<ReactPortal wrapperId="mobile-menu-react-portal">
					<>
						<Styled.ModalOverflow onClick={handleClose} />
						<Styled.Modal>
							{navItems.map(item => {
								return <NavItem key={item.label} {...item} />;
							})}
						</Styled.Modal>
					</>
				</ReactPortal>
			)}
		</>
	);
};
