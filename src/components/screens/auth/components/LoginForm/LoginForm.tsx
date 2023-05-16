import { Form, FormTheme } from '@/components/ui';

import { DEFAULT_VALUES, LOGIN_FORM_FIELDS, LOGIN_SUBMIT_BUTTON } from './constants';
import { LoginFormData } from './LoginForm.interface';

export const LoginForm = () => {
	const onFormSubmit = (data: LoginFormData) => {
		console.log(data);
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
