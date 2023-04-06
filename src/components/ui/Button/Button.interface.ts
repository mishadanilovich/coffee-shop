import { MouseEventHandler, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string | JSX.Element;
	isLoading?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
