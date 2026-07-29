import { useState } from 'react';
import { ReactPortal } from '@/components/ui';
import { Menu } from '@/components/icons';

import { NavigationProps } from './Navigation.interface';
import type { NavItem as NavItemType } from './Navigation.interface';

import * as Styled from './Navigation.styled';

export const MobileNavigation = ({ navItems, className }: NavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => setIsOpen(prevState => !prevState);

	const NavItem = ({ href, label, onClick, ...rest }: NavItemType) => {
		const handleNavClick = () => {
			onClick?.();
			handleToggle();
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
			<Menu
				className={className}
				role="button"
				tabIndex={0}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isOpen}
				onClick={handleToggle}
				onKeyDown={event => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						handleToggle();
					}
				}}
			/>
			{isOpen && (
				<ReactPortal wrapperId="mobile-menu-react-portal">
					<>
						<Styled.ModalOverflow onClick={handleToggle}>
							<Styled.Modal onClick={event => event.stopPropagation()}>
								{navItems.map(item => {
									return <NavItem key={item.label} {...item} />;
								})}
							</Styled.Modal>
						</Styled.ModalOverflow>
					</>
				</ReactPortal>
			)}
		</>
	);
};
