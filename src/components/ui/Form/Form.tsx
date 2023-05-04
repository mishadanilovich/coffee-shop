import { FieldValues, useForm } from 'react-hook-form';
import { Button, Input, InputUse } from '@/components/ui';

import { FormProps, FormTheme } from './Form.interface';
import * as Styled from './Form.styled';

export const Form = <FormData extends FieldValues>({
	title,
	fields,
	submitButtonLabel,
	onSubmit,
	defaultValues,
	theme = FormTheme.white
}: FormProps<FormData>) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<FormData>(defaultValues);
	const getFormFields = () => {
		return fields.map((field, index) => (
			<Input
				key={index}
				error={errors[field.id]?.message as string}
				use={theme === FormTheme.white ? InputUse.primary : InputUse.secondary}
				{...register(field.id, { ...field.options })}
				{...field}
			/>
		));
	};

	const onFormSubmit = handleSubmit(data => onSubmit(data));

	return (
		<Styled.Form onSubmit={onFormSubmit} className="form">
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
