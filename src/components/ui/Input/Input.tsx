import { forwardRef } from 'react';

import { InputProps, InputUse } from './Input.interface';
import * as Styled from './Input.styled';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ leftIcon: IconComponent, error, use = InputUse.primary, ...inputProps }, ref) => (
		<Styled.Container>
			<Styled.InputBox error={error} use={use}>
				{IconComponent && <IconComponent />}
				<Styled.Input
					autoComplete="off"
					ref={ref}
					isLeftIcon={Boolean(IconComponent)}
					name={inputProps.id}
					{...inputProps}
				/>
			</Styled.InputBox>
			{error && <Styled.Error>{error}</Styled.Error>}
		</Styled.Container>
	)
);
Input.displayName = 'Input';
