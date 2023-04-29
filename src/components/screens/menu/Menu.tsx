import { MenuCard } from '@/components/ui';

import { menu } from './mock';
import * as Styled from './Menu.styled';

export const Menu = () => {
	const getContent = () => {
		return menu.map(({ title, items }, index) => (
			<Styled.Menu key={index}>
				<Styled.Title>{title}</Styled.Title>
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
