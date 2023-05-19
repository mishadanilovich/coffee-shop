import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BasketModal, Dropdown } from '@/components/ui';
import { useFetch } from '@/components/hooks';
import { NAV_ITEMS, ROUTE } from '@/components/constants';

import * as Services from '@/services';

import * as Styled from './Header.styled';

export const Header = () => {
	const router = useRouter();
	const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

	const { GetUser } = useFetch();
	const { data: userData } = GetUser();

	const onClickLogout = async () => {
		Services.auth.logout();
		router.push(ROUTE.AUTH);
	};

	return (
		<Styled.Header>
			<Styled.Logo src="/logo.png" alt="Logo" width={60} height={60} />
			<Styled.Navigation navItems={NAV_ITEMS} />
			<Styled.Actions>
				{userData && <Styled.Username>{userData.username}</Styled.Username>}
				<Dropdown content={[{ label: 'Logout', onClick: onClickLogout }]}>
					<Styled.AvatarContainer>
						<Styled.Avatar />
					</Styled.AvatarContainer>
				</Dropdown>
				<Styled.Store onClick={() => setIsStoreModalOpen(!isStoreModalOpen)} />
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
