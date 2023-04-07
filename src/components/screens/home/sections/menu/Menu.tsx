import { MenuCard, Title, TitleType } from '@/components/ui';

import { TITLE_CONTENT } from './constants';
import { MenuProps } from './Menu.interface';
import * as Styled from './Menu.styled';

export const Menu = ({ data }: MenuProps) => {
	const getContent = () => {
		return data.map((item, index) => <MenuCard key={index} {...item} />);
	};

	return (
		<Styled.Container>
			<Title type={TitleType.h2} content={TITLE_CONTENT} />
			<Styled.Content>{getContent()}</Styled.Content>
		</Styled.Container>
	);
};
