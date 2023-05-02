import { forwardRef } from 'react';

import { InputProps, InputUse } from './Input.interface';
import * as Styled from './Input.styled';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ leftIcon: IconComponent, error, use = InputUse.primary, ...inputProps }, ref) => (
		<Styled.InputBox error={error} use={use}>
			{IconComponent && <IconComponent />}
			<Styled.Input
				ref={ref}
				isLeftIcon={Boolean(IconComponent)}
				name={inputProps.id}
				{...inputProps}
			/>
			{error && <Styled.Error>{error}</Styled.Error>}
		</Styled.InputBox>
	)
);
Input.displayName = 'Input';
