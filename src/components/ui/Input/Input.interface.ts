import { FunctionComponent, InputHTMLAttributes, SVGProps } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	leftIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
	error?: string;
}
