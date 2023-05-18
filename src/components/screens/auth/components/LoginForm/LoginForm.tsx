import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { Form, FormTheme } from '@/components/ui';
import { LoginFormData } from '@/interfaces';
import { ROUTE } from '@/components/constants';

import * as Services from '@/services';

import { DEFAULT_VALUES, LOGIN_FORM_FIELDS, LOGIN_SUBMIT_BUTTON } from './constants';

export const LoginForm = () => {
	const router = useRouter();

	const onFormSubmit = async (data: LoginFormData) => {
		try {
			const { token } = await Services.auth.login(data);

			setCookie(null, '_token', token, {
				path: '/'
			});

			await router.push(ROUTE.HOME);
		} catch (err) {
			console.warn('LoginForm', err);
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
