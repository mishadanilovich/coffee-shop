import { NAV_ITEMS } from '@/components/constants';

import * as Styled from './Header.styled';

export const Header = () => {
	return (
		<Styled.Header>
			<Styled.Logo src="/logo.png" alt="Logo" width={60} height={60} />
			<Styled.Navigation navItems={NAV_ITEMS} />
			<Styled.Actions>
				<Styled.Store width="27px" height="27px" />
			</Styled.Actions>
		</Styled.Header>
	);
};
