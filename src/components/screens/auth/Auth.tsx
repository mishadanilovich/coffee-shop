import { Tabs } from '@/components/ui';
import { ArrowBack } from '@/components/icons';
import { ROUTE } from '@/components/constants';

import { AUTH_TABS, AUTH_TITLE } from './constants';
import * as Styled from './Auth.styled';

export const Auth = () => (
	<Styled.Page>
		<Styled.Container>
			<Styled.Header>
				<Styled.Link href={ROUTE.HOME}>
					<ArrowBack height={30} width={30} />
				</Styled.Link>
				<Styled.Title>{AUTH_TITLE}</Styled.Title>
			</Styled.Header>
			<Tabs items={AUTH_TABS} />
		</Styled.Container>
	</Styled.Page>
);
