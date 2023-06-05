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

	const { GetUser, GetBasket } = useFetch();
	const { data: userData } = GetUser();
	const { data: basketData } = GetBasket();

	const onClickLogout = () => {
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
				<Styled.StoreContainer>
					{!!basketData?.items?.length && <Styled.Counter />}
					<Styled.Store onClick={() => setIsStoreModalOpen(!isStoreModalOpen)} />
				</Styled.StoreContainer>
			</Styled.Actions>
			{isStoreModalOpen && (
				<BasketModal
					isOpen={isStoreModalOpen}
					handleClose={() => setIsStoreModalOpen(false)}
				/>
			)}
		</Styled.Header>
	);
};
