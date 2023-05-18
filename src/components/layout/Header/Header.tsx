import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BasketModal, Dropdown } from '@/components/ui';
import { NAV_ITEMS, ROUTE } from '@/components/constants';

import * as Services from '@/services';

import * as Styled from './Header.styled';

export const Header = () => {
	const router = useRouter();
	const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

	const onClickLogout = () => {
		Services.auth.logout();
		router.push(ROUTE.AUTH);
	};

	return (
		<Styled.Header>
			<Styled.Logo src="/logo.png" alt="Logo" width={60} height={60} />
			<Styled.Navigation navItems={NAV_ITEMS} />
			<Styled.Actions>
				<Styled.Store onClick={() => setIsStoreModalOpen(!isStoreModalOpen)} />
				<Dropdown content={[{ label: 'Logout', onClick: onClickLogout }]}>
					<Styled.Avatar />
				</Dropdown>
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
