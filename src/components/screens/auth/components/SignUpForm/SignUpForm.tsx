import { setCookie } from 'nookies';
import { Form, FormTheme } from '@/components/ui';
import { RegisterFromData } from '@/interfaces';

import * as Services from '@/services';

import { DEFAULT_VALUES, SIGN_UP_FORM_FIELDS, SIGN_UP_SUBMIT_BUTTON } from './constants';

export const SignUpForm = () => {
	const onFormSubmit = async (data: RegisterFromData) => {
		try {
			const { token } = await Services.auth.register(data);

			setCookie(null, '_token', token, {
				path: '/'
			});
		} catch (err) {
			console.warn('LoginForm', err);
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
