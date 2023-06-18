import { FieldValues } from 'react-hook-form';
import { Button } from '@/components/ui';

import { useForm } from './hooks';
import { FormProps, FormTheme } from './Form.interface';

import * as Styled from './Form.styled';

export const Form = <FormData extends FieldValues>({
	title,
	submitButtonLabel,
	rowSpacing = 4,
	theme = FormTheme.white,
	isResetToDefault = true,
	...formProps
}: FormProps<FormData>) => {
	const { onFormSubmit, isSubmitting, getFormFields } = useForm({
		theme,
		isResetToDefault,
		...formProps
	});

	return (
		<Styled.Form onSubmit={onFormSubmit} className="form" rowSpacing={rowSpacing}>
			{title && <Styled.Title className="form-title">{title}</Styled.Title>}
			{getFormFields()}
			<Button
				type="submit"
				className="form-button"
				isLoading={isSubmitting}
				label={submitButtonLabel}
			/>
		</Styled.Form>
	);
};
