import { forwardRef } from 'react';

import { InputProps } from './Input.interface';
import * as Styled from './Input.styled';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ leftIcon: IconComponent, error, ...inputProps }, ref) => (
		<Styled.InputBox error={error}>
			{IconComponent && <IconComponent />}
			<Styled.Input
				ref={ref}
				isLeftIcon={Boolean(IconComponent)}
				{...inputProps}
				name={inputProps.id}
			/>
			{error && <Styled.Error>{error}</Styled.Error>}
		</Styled.InputBox>
	)
);
Input.displayName = 'Input';
