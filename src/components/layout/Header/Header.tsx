import { NAV_ITEMS } from '@/components/constants';

import * as Styled from './Header.styled';
import { BasketModal } from '@/components/ui';
import { useState } from 'react';

export const Header = () => {
	const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

	return (
		<Styled.Header>
			<Styled.Logo src="/logo.png" alt="Logo" width={60} height={60} />
			<Styled.Navigation navItems={NAV_ITEMS} />
			<Styled.Actions>
				<Styled.Store
					width="27px"
					height="27px"
					onClick={() => setIsStoreModalOpen(!isStoreModalOpen)}
				/>
			</Styled.Actions>
			{isStoreModalOpen && (
				<BasketModal
					isOpen={isStoreModalOpen}
					data={{ items: [], totalPrice: 0 }}
					handleClose={() => setIsStoreModalOpen(false)}
				/>
			)}
		</Styled.Header>
	);
};
