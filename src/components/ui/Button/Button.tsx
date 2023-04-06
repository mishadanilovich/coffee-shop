import { MouseEvent } from 'react';
import { Loader } from '@/components/icons';

import { ButtonProps } from './Button.interface';
import * as Styled from './Button.styled';

export const Button = ({ disabled, isLoading, onClick, label, ...restProps }: ButtonProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (disabled || isLoading) {
			return;
		}

		onClick?.(event);
	};

	return (
		<Styled.Button disabled={disabled} onClick={handleClick} {...restProps}>
			{isLoading ? <Loader /> : label}
		</Styled.Button>
	);
};
