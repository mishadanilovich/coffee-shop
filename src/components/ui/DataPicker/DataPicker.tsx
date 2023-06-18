import { DataPickerProps } from './DataPicker.interface';

import * as Styled from './DataPicker.styled';

export const DataPicker = ({
	error,
	pickerOptions,
	onChange,
	value,
	className,
	title
}: DataPickerProps) => {
	const getOptions = () => {
		return pickerOptions.map(({ icon: IconComponent, optionValue, label }, index) => {
			const isOptionSelected = optionValue === value;
			return (
				<Styled.Option
					selected={isOptionSelected}
					type="button"
					key={index}
					onClick={() => onChange(isOptionSelected ? null : optionValue)}
				>
					{IconComponent && <IconComponent height="20px" width="20px" />}
					{label}
				</Styled.Option>
			);
		});
	};

	return (
		<Styled.Container>
			{title && <Styled.Title>{title}</Styled.Title>}
			<Styled.OptionsContainer error={error} className={className}>
				{getOptions()}
			</Styled.OptionsContainer>
			{error && <Styled.Error>{error.message}</Styled.Error>}
		</Styled.Container>
	);
};
