import { Tabs } from '@/components/ui';

import { AUTH_TABS, AUTH_TITLE } from './constants';
import * as Styled from './Auth.styled';

export const Auth = () => (
	<Styled.Page>
		<Styled.Container>
			<Styled.Title>{AUTH_TITLE}</Styled.Title>
			<Tabs items={AUTH_TABS} />
		</Styled.Container>
	</Styled.Page>
);
