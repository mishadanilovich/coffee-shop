import { FieldValues, useForm } from 'react-hook-form';
import { Button, Input } from '@/components/ui';

import { FormProps } from './Form.interface';
import * as Styled from './Form.styled';

export const Form = <FormData extends FieldValues>({
	title,
	fields,
	submitButtonLabel,
	onSubmit,
	defaultValues
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
				{...register(field.id, { ...field.options })}
				{...field}
			/>
		));
	};

	const onFormSubmit = handleSubmit(data => onSubmit(data));

	return (
		<Styled.Form onSubmit={onFormSubmit}>
			{title && <Styled.Title>{title}</Styled.Title>}
			{getFormFields()}
			<Button type="submit" isLoading={isSubmitting} label={submitButtonLabel} />
		</Styled.Form>
	);
};
