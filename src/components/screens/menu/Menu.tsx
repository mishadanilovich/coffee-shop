import { MenuCard } from '@/components/ui';
import { useFetch } from '@/components/hooks';

import * as Services from '@/services';

import { MenuProps } from './Menu.interface';

import * as Styled from './Menu.styled';

export const Menu = ({ menu }: MenuProps) => {
	const { GetBasket } = useFetch();
	const { data: basketData, mutate: mutateBasket } = GetBasket();

	const handleAddMenuButton = async (menuItemId: string) => {
		if (!basketData) return;

		await Services.basket.addBasketItem({ basketId: basketData.id, menuItemId });
		await mutateBasket();
	};

	const getContent = () => {
		return menu.map(({ id, name, menu: items }) => (
			<Styled.Menu key={id}>
				<Styled.Title>{name}</Styled.Title>
				<Styled.MenuList>
					{items.map(menuItem => (
						<MenuCard
							key={menuItem.id}
							data={menuItem}
							handleAddButton={handleAddMenuButton}
						/>
					))}
				</Styled.MenuList>
			</Styled.Menu>
		));
	};

	return <Styled.Container>{getContent()}</Styled.Container>;
};
