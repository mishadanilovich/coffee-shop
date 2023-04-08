import { MouseEventHandler, ButtonHTMLAttributes } from 'react';

export enum ButtonUse {
	primary = 'primary',
	secondary = 'secondary'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string | JSX.Element;
	isLoading?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	use?: ButtonUse;
}
