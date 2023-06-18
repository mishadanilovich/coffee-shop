import { useCallback, useEffect } from 'react';
import { Controller, FieldValues, useForm as useReactHookForm } from 'react-hook-form';
import { DataPicker, Input, InputUse } from '@/components/ui';

import { FormProps, FormTheme } from './Form.interface';

import * as Styled from './Form.styled';

export const useForm = <FormData extends FieldValues>({
	defaultValues,
	fields,
	isResetToDefault,
	onSubmit,
	theme
}: Pick<
	FormProps<FormData>,
	'defaultValues' | 'fields' | 'isResetToDefault' | 'onSubmit' | 'theme'
>) => {
	const {
		getValues,
		watch,
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useReactHookForm<FormData>(defaultValues);

	useEffect(() => {
		reset(defaultValues);
	}, [defaultValues, reset]);

	const watchFields = fields
		.filter(field => field.relatedField)
		.map(field => field.relatedField!.field);
	const watchValues = watch(watchFields);

	// Paste the watchValues to handle the form re-rendering to show related fields
	const getFormFields = useCallback(
		(values: FormData[]) => () => {
			return fields.map((formField, index) => {
				if (
					formField.relatedField &&
					formField.relatedField.value !== getValues(formField.relatedField.field)
				) {
					return null;
				}

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

				if ('isCard' in formField) {
					const { id, ...restProps } = formField;
					return <Styled.CardElement key={id} id={id} {...restProps} />;
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
		},
		[control, errors, fields, getValues, register, theme]
	)(watchValues);

	const onFormSubmit = handleSubmit(async data => {
		await onSubmit(data);
		if (isResetToDefault) reset(defaultValues);
	});

	return { isSubmitting, getFormFields, onFormSubmit };
};
