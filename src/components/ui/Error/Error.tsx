import { Cup } from '@/components/icons';
import { ERROR_MESSAGE, ERROR_TITLE } from '@/components/constants';

import * as Styled from './Error.styled';

export const Error = () => (
	<Styled.Container>
		<Styled.Title>{ERROR_TITLE}</Styled.Title>
		<Styled.Message>{ERROR_MESSAGE}</Styled.Message>
		<Cup />
	</Styled.Container>
);
