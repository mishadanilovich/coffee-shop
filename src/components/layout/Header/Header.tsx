import { Navigation } from '@/components/ui';
import { NAV_ITEMS } from '@/components/constants';

import * as Styled from './Header.styled';

export const Header = () => {
	return (
		<Styled.Header>
			<Styled.Logo src="/logo.png" alt="Logo" width={60} height={60} />
			<Navigation navItems={NAV_ITEMS} />
			<Styled.Actions>Search</Styled.Actions>
		</Styled.Header>
	);
};
