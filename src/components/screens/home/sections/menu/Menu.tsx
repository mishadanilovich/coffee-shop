import { MenuCard, Title, TitleType } from '@/components/ui';
import { ROUTE } from '@/components/constants';

import { SEE_MORE, TITLE_CONTENT } from './constants';
import { MenuProps } from './Menu.interface';
import * as Styled from './Menu.styled';

export const Menu = ({ menu }: MenuProps) => {
	const getContent = () => {
		return menu.map((item, index) => <MenuCard key={index} {...item} />);
	};

	return (
		<Styled.Container>
			<Title type={TitleType.h2} content={TITLE_CONTENT} />
			<Styled.Content>{getContent()}</Styled.Content>
			<Styled.StyledLink href={ROUTE.MENU}>{SEE_MORE}</Styled.StyledLink>
		</Styled.Container>
	);
};
