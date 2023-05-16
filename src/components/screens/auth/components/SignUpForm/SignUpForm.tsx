import { Form, FormTheme } from '@/components/ui';

import { DEFAULT_VALUES, SIGN_UP_FORM_FIELDS, SIGN_UP_SUBMIT_BUTTON } from './constants';
import { SignUpFormData } from './SignUpForm.interface';

export const SignUpForm = () => {
	const onFormSubmit = (data: SignUpFormData) => {
		console.log(data);
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
