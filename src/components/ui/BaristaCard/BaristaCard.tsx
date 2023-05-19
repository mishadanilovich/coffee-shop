import { getFullName } from '@/components/utils';

import { BaristaCardProps } from './BaristaCard.interface';
import * as Styled from './BaristaCard.styled';

export const BaristaCard = ({ data }: BaristaCardProps) => {
	const { quote, fullName, avatar } = data;
	const baristaFullName = getFullName(fullName);

	return (
		<Styled.Container>
			<Styled.QuotationMark />
			{quote && <Styled.Quote>{quote}</Styled.Quote>}
			{avatar && <Styled.Avatar src={avatar} alt={baristaFullName} height={70} width={70} />}
			<h3>{baristaFullName}</h3>
		</Styled.Container>
	);
};
