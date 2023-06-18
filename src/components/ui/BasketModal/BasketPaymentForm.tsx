import { Form, FormTheme } from '@/components/ui';

import {
	DEFAULT_VALUES,
	ORDER_DETAILS_FORM_FIELDS,
	ORDER_DETAILS_FORM_TITLE,
	ORDER_DETAILS_SUBMIT_BUTTON
} from './constants';
import { useBasketPaymentForm } from './hooks';
import { BasketPaymentFormProps } from './BasketPaymentForm.interface';

export const BasketPaymentForm = ({ handleBasketModalClose, user }: BasketPaymentFormProps) => {
	const { handleBasketSubmit } = useBasketPaymentForm();

	return (
		<Form
			theme={FormTheme.dark}
			title={ORDER_DETAILS_FORM_TITLE}
			fields={ORDER_DETAILS_FORM_FIELDS}
			submitButtonLabel={ORDER_DETAILS_SUBMIT_BUTTON}
			defaultValues={{ ...DEFAULT_VALUES, ...user }}
			onSubmit={handleBasketSubmit(handleBasketModalClose)}
			isResetToDefault={false}
		/>
	);
};
