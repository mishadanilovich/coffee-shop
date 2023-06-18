import { FieldValues, Path, PathValue, RegisterOptions } from 'react-hook-form';
import { CardElementProps } from '@stripe/react-stripe-js';
import { DataPickerProps, InputProps } from '@/components/ui';

export enum FormTheme {
	dark = 'dark',
	white = 'white'
}

interface RelatedField<FormData extends FieldValues> {
	field: Path<FormData>;
	value: PathValue<FormData, Path<FormData>>;
}

interface CommonFormField<FormData extends FieldValues> {
	id: Path<FormData>;
	options?: RegisterOptions<FormData, Path<FormData>>;
	relatedField?: RelatedField<FormData>;
}

export interface CardFormField<FormData extends FieldValues> extends CardElementProps {
	isCard: boolean;
	relatedField?: RelatedField<FormData>;
}

export interface InputFormField<FormData extends FieldValues>
	extends Pick<InputProps, 'leftIcon' | 'placeholder' | 'type'>,
		CommonFormField<FormData> {}

export interface DataPickerFromField<FormData extends FieldValues>
	extends Pick<DataPickerProps, 'title' | 'pickerOptions'>,
		CommonFormField<FormData> {}

export type FormField<FormData extends FieldValues> =
	| InputFormField<FormData>
	| DataPickerFromField<FormData>
	| CardFormField<FormData>;

export interface FormProps<FormData extends FieldValues> {
	title?: string;
	fields: FormField<FormData>[];
	submitButtonLabel: string;
	onSubmit: (data: FormData) => void;
	defaultValues: FormData;
	rowSpacing?: number;
	theme?: FormTheme;
	isResetToDefault?: boolean;
}
