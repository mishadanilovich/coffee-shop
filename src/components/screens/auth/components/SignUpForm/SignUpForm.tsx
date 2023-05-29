import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { Form, FormTheme, Notification, NotificationType } from '@/components/ui';
import { RegisterFromData } from '@/types';
import { ROUTE } from '@/components/constants';
import { removeEmptyFields } from '@/components/utils';

import * as Services from '@/services';

import {
	DEFAULT_VALUES,
	INVALID_REGISTRATION,
	SIGN_UP_FORM_FIELDS,
	SIGN_UP_SUBMIT_BUTTON,
	SUCCESSFUL_REGISTRATION
} from './constants';

export const SignUpForm = () => {
	const router = useRouter();

	const onFormSubmit = async (data: RegisterFromData) => {
		try {
			const { token } = await Services.auth.register(
				removeEmptyFields<RegisterFromData>(data)
			);

			setCookie(null, '_token', token, {
				path: '/'
			});

			Notification({
				type: NotificationType.success,
				message: SUCCESSFUL_REGISTRATION
			});

			router.push(ROUTE.HOME);
		} catch (err) {
			Notification({
				type: NotificationType.failure,
				message: INVALID_REGISTRATION
			});
		}
	};

	return (
		<Form
			theme={FormTheme.dark}
			fields={SIGN_UP_FORM_FIELDS}
			submitButtonLabel={SIGN_UP_SUBMIT_BUTTON}
			onSubmit={onFormSubmit}
			defaultValues={DEFAULT_VALUES}
		/>
	);
};
