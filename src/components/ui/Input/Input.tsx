import { forwardRef } from 'react';

import { InputProps } from './Input.interface';
import * as Styled from './Input.styled';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ leftComponent, error, ...inputProps }, ref) => (
		<>
			<Styled.InputBox error={error}>
				{leftComponent}
				<Styled.Input ref={ref} {...inputProps} name={inputProps.id} />
				{error && <Styled.Error>{error}</Styled.Error>}
			</Styled.InputBox>
		</>
	)
);
Input.displayName = 'Input';
