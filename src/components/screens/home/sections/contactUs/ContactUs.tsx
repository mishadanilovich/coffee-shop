import { Form, Map, Title, TitleType } from '@/components/ui';
import { ANCHORS, COFFEE_SHOP_COORDS } from '@/components/constants';

import {
	CONTACT_US_FORM_FIELDS,
	CONTACT_US_FORM_TITLE,
	CONTACT_US_SUBMIT_BUTTON,
	CONTACT_US_TITLE,
	DEFAULT_VALUES
} from './constants';
import { ContactUsFormData } from './ContactUs.interface';
import * as Styled from './ContactUs.styled';

export const ContactUs = () => {
	const onFormSubmit = (data: ContactUsFormData) => {
		console.log(data);
	};

	return (
		<Styled.Container id={ANCHORS.CONTACTS}>
			<Title content={CONTACT_US_TITLE} type={TitleType.h2} />
			<Styled.Content>
				<Styled.LeftContent>
					<Map mapContainerStyle={Styled.mapStyles} center={COFFEE_SHOP_COORDS} />
				</Styled.LeftContent>
				<Styled.RightContent>
					<Form
						title={CONTACT_US_FORM_TITLE}
						fields={CONTACT_US_FORM_FIELDS}
						submitButtonLabel={CONTACT_US_SUBMIT_BUTTON}
						defaultValues={DEFAULT_VALUES}
						onSubmit={onFormSubmit}
					/>
				</Styled.RightContent>
			</Styled.Content>
		</Styled.Container>
	);
};
