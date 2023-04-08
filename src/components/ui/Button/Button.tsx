import { MouseEvent } from 'react';
import { Loader } from '@/components/icons';

import { ButtonProps, ButtonUse } from './Button.interface';
import * as Styled from './Button.styled';

export const Button = ({
	disabled,
	isLoading,
	onClick,
	label,
	use = ButtonUse.primary,
	...restProps
}: ButtonProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (disabled || isLoading) {
			return;
		}

		onClick?.(event);
	};

	return (
		<Styled.Button disabled={disabled} onClick={handleClick} use={use} {...restProps}>
			{label}
			{isLoading && (
				<Styled.LoaderContainer>
					<Loader />
				</Styled.LoaderContainer>
			)}
		</Styled.Button>
	);
};
