import { FunctionComponent, InputHTMLAttributes, SVGProps } from 'react';

export enum InputUse {
	primary = 'primary',
	secondary = 'secondary'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	leftIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;
	error?: string;
	use?: InputUse;
}
