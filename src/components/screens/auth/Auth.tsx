import { Tabs } from '@/components/ui';

import { AUTH_TABS } from './constants';
import * as Styled from './Auth.styled';

export const Auth = () => (
	<Styled.Container>
		<Tabs items={AUTH_TABS} />
	</Styled.Container>
);
