import { FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { InputProps } from '../Input';

export interface FormField<FormData extends FieldValues>
	extends Pick<InputProps, 'leftIcon' | 'placeholder' | 'type'> {
	id: Path<FormData>;
	options?: RegisterOptions<FormData, Path<FormData>>;
}

export interface FormProps<FormData extends FieldValues> {
	title?: string;
	fields: FormField<FormData>[];
	submitButtonLabel: string;
	onSubmit: (data: FormData) => void;
	defaultValues: FormData;
}
