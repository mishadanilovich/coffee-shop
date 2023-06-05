import { useEffect } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button, Input, InputUse, DataPicker } from '@/components/ui';

import { FormProps, FormTheme } from './Form.interface';
import * as Styled from './Form.styled';

export const Form = <FormData extends FieldValues>({
	title,
	fields,
	submitButtonLabel,
	onSubmit,
	defaultValues,
	rowSpacing = 4,
	theme = FormTheme.white,
	isResetToDefault = true
}: FormProps<FormData>) => {
	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<FormData>(defaultValues);

	useEffect(() => {
		reset(defaultValues);
	}, [defaultValues, reset]);

	const getFormFields = () => {
		return fields.map((formField, index) => {
			if ('pickerOptions' in formField) {
				const { id, options, ...dataPickerProps } = formField;

				return (
					<Controller
						key={index}
						control={control}
						name={id}
						rules={options}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<DataPicker
								value={value}
								error={error}
								onChange={onChange}
								{...dataPickerProps}
							/>
						)}
					/>
				);
			}

			return (
				<Input
					key={index}
					error={errors[formField.id]?.message as string}
					use={theme === FormTheme.white ? InputUse.primary : InputUse.secondary}
					{...formField}
					{...register(formField.id, { ...formField.options })}
				/>
			);
		});
	};

	const onFormSubmit = handleSubmit(async data => {
		await onSubmit(data);
		if (isResetToDefault) reset(defaultValues);
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
