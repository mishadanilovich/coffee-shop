import { useState } from 'react';

import { TabsInterface } from './Tabs.interface';
import * as Styled from './Tabs.styled';

export const Tabs = ({ items }: TabsInterface) => {
	const [selectedTab, setSelectedTab] = useState(items[0]);

	const getTabsLabels = () => {
		return items.map(tab => (
			<Styled.TabLabel
				selected={selectedTab?.id === tab.id}
				onClick={() => setSelectedTab(tab)}
				key={tab.id}
			>
				{tab.label}
			</Styled.TabLabel>
		));
	};

	if (!items.length) return null;

	return (
		<div>
			<Styled.LabelsContainer>{getTabsLabels()}</Styled.LabelsContainer>
			{selectedTab && <div>{selectedTab.children}</div>}
		</div>
	);
};
