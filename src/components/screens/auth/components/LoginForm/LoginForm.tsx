import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { Form, FormTheme, Notification, NotificationType } from '@/components/ui';
import { LoginFormData } from '@/types';
import { ROUTE } from '@/components/constants';

import * as Services from '@/services';

import {
	DEFAULT_VALUES,
	INVALID_LOGIN,
	LOGIN_FORM_FIELDS,
	LOGIN_SUBMIT_BUTTON,
	SUCCESSFUL_LOGIN
} from './constants';

export const LoginForm = () => {
	const router = useRouter();

	const onFormSubmit = async (data: LoginFormData) => {
		try {
			const { token } = await Services.auth.login(data);

			setCookie(null, '_token', token, {
				path: '/'
			});

			Notification({
				type: NotificationType.success,
				message: SUCCESSFUL_LOGIN
			});

			router.push(ROUTE.HOME);
		} catch (err) {
			Notification({
				type: NotificationType.failure,
				message: INVALID_LOGIN
			});
		}
	};

	return (
		<Form
			theme={FormTheme.dark}
			fields={LOGIN_FORM_FIELDS}
			submitButtonLabel={LOGIN_SUBMIT_BUTTON}
			onSubmit={onFormSubmit}
			defaultValues={DEFAULT_VALUES}
		/>
	);
};
