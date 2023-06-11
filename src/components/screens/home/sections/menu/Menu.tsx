import { LinkUse, MenuCard, Title, TitleType } from '@/components/ui';
import { useFetch } from '@/components/hooks';
import { ROUTE } from '@/components/constants';

import * as Services from '@/services';

import { SEE_MORE, MENU_TITLE } from './constants';
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

	// Fix using pagination
	const getContent = () => {
		return menu
			.slice(0, 10)
			.map((item, index) => (
				<MenuCard key={index} data={item} handleAddButton={handleAddMenuButton} />
			));
	};

	return (
		<Styled.Container>
			<Title type={TitleType.h2} content={MENU_TITLE} />
			<Styled.Content>{getContent()}</Styled.Content>
			<Styled.StyledLink use={LinkUse.secondary} href={ROUTE.MENU}>
				{SEE_MORE}
			</Styled.StyledLink>
		</Styled.Container>
	);
};
