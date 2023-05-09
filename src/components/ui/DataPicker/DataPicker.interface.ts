import { FunctionComponent, SVGProps } from 'react';
import { FieldError } from 'react-hook-form/dist/types';

type DataPickerValue = string | null;

interface PickerOption {
	optionValue: DataPickerValue;
	label: string;
	icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export interface DataPickerProps {
	title?: string;
	value: DataPickerValue;
	onChange: (value: DataPickerValue) => void;
	error?: FieldError;
	className?: string;
	pickerOptions: PickerOption[];
}
