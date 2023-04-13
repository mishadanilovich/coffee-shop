import { InputHTMLAttributes, ReactElement } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	leftComponent?: ReactElement;
	error?: string;
}
