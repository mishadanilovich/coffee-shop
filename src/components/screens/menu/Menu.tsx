import { MenuCard } from '@/components/ui';

import { MenuProps } from './Menu.interface';

import * as Styled from './Menu.styled';

export const Menu = ({ menu }: MenuProps) => {
	const getContent = () => {
		return menu.map(({ id, name, menu: items }) => (
			<Styled.Menu key={id}>
				<Styled.Title>{name}</Styled.Title>
				<Styled.MenuList>
					{items.map(menuItem => (
						<MenuCard key={menuItem.id} data={menuItem} />
					))}
				</Styled.MenuList>
			</Styled.Menu>
		));
	};

	return <Styled.Container>{getContent()}</Styled.Container>;
};
