import { Form, Map, Notification, NotificationType, Title, TitleType } from '@/components/ui';
import { removeEmptyFields } from '@/components/utils';
import { ANCHORS, COFFEE_SHOP_COORDS, ERROR_MESSAGE } from '@/components/constants';
import { User } from '@/interfaces';

import * as Services from '@/services';

import {
	CONTACT_US_FORM_FIELDS,
	CONTACT_US_FORM_TITLE,
	CONTACT_US_SUBMIT_BUTTON,
	CONTACT_US_TITLE,
	DEFAULT_VALUES,
	SUCCESSFULLY_CONTACT_US
} from './constants';
import { ContactUsFormData, ContactUsProps } from './ContactUs.interface';

import * as Styled from './ContactUs.styled';

export const ContactUs = ({ user }: ContactUsProps) => {
	const { id = undefined, ...userData } = user ? removeEmptyFields<User>(user) : {};

	const onFormSubmit = async (data: ContactUsFormData) => {
		try {
			const { address, contactPhone } = data;

			if (
				(address || contactPhone) &&
				(user?.contactPhone === null || !user?.address === null)
			) {
				await Services.users.updateMe({ address, contactPhone });
			}

			Notification({
				type: NotificationType.success,
				message: SUCCESSFULLY_CONTACT_US
			});
		} catch (err) {
			Notification({
				type: NotificationType.failure,
				message: ERROR_MESSAGE
			});
		}
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
						defaultValues={{ ...DEFAULT_VALUES, ...userData }}
						onSubmit={onFormSubmit}
					/>
				</Styled.RightContent>
			</Styled.Content>
		</Styled.Container>
	);
};
