import { Map, Title, TitleType } from '@/components/ui';
import { COFFEE_SHOP_COORDS } from '@/components/constants';

import { CONTACT_US_TITLE } from './constants';
import * as Styled from './ContactUs.styled';

export const ContactUs = () => (
	<Styled.Container>
		<Title content={CONTACT_US_TITLE} type={TitleType.h2} />
		<Styled.Content>
			<Styled.LeftContent>
				<Map mapContainerStyle={Styled.mapStyles} center={COFFEE_SHOP_COORDS} />
			</Styled.LeftContent>
			<Styled.RightContent></Styled.RightContent>
		</Styled.Content>
	</Styled.Container>
);
