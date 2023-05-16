import Link from 'next/link';
import { useState } from 'react';
import { NAV_ITEMS, ROUTE } from '@/components/constants';

import * as Styled from './Header.styled';
import { BasketModal } from '@/components/ui';

export const Header = () => {
	const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

	return (
		<Styled.Header>
			<Styled.Logo src="/logo.png" alt="Logo" width={60} height={60} />
			<Styled.Navigation navItems={NAV_ITEMS} />
			<Styled.Actions>
				<Styled.Store onClick={() => setIsStoreModalOpen(!isStoreModalOpen)} />
				<Link href={ROUTE.AUTH}>
					<Styled.Avatar />
				</Link>
			</Styled.Actions>
			{isStoreModalOpen && (
				<BasketModal
					isOpen={isStoreModalOpen}
					data={{
						items: [],
						totalPrice: 0
					}}
					handleClose={() => setIsStoreModalOpen(false)}
				/>
			)}
		</Styled.Header>
	);
};
