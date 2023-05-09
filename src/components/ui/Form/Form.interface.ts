import { FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { DataPickerProps, InputProps } from '@/components/ui';

export enum FormTheme {
	dark = 'dark',
	white = 'white'
}

interface CommonFormField<FormData extends FieldValues> {
	id: Path<FormData>;
	options?: RegisterOptions<FormData, Path<FormData>>;
}

export interface InputFormField<FormData extends FieldValues>
	extends Pick<InputProps, 'leftIcon' | 'placeholder' | 'type'>,
		CommonFormField<FormData> {}

export interface DataPickerFromField<FormData extends FieldValues>
	extends Pick<DataPickerProps, 'title' | 'pickerOptions'>,
		CommonFormField<FormData> {}

export type FormField<FormData extends FieldValues> =
	| InputFormField<FormData>
	| DataPickerFromField<FormData>;

export interface FormProps<FormData extends FieldValues> {
	title?: string;
	fields: FormField<FormData>[];
	submitButtonLabel: string;
	onSubmit: (data: FormData) => void;
	defaultValues: FormData;
	theme?: FormTheme;
}
