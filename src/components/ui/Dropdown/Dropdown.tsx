import RcDropdown from 'rc-dropdown';

import 'rc-dropdown/assets/index.css';

import { DropdownProps } from './Dropdown.interface';

import * as Styled from './Dropdown.styled';

export const Dropdown = ({ content, children }: DropdownProps) => {
	const getContent = () => {
		return content.map(({ label, onClick }, index) => (
			<Styled.DropdownItem key={index} onClick={onClick}>
				{label}
			</Styled.DropdownItem>
		));
	};
	const dropdownContent = <Styled.DropdownContent>{getContent()}</Styled.DropdownContent>;

	return (
		<RcDropdown
			align={{ offset: [0, 10] }}
			trigger="click"
			animation="slide-up"
			placement="bottomRight"
			overlay={dropdownContent}
		>
			{children}
		</RcDropdown>
	);
};
