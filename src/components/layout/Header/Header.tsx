import { useState } from 'react';
import { useRouter } from 'next/router';
import { BasketModal, Dropdown, Link, LinkUse } from '@/components/ui';
import { useFetch } from '@/components/hooks';
import { NAV_ITEMS, ROUTE } from '@/components/constants';

import * as Services from '@/services';

import * as Styled from './Header.styled';

export const Header = () => {
	const router = useRouter();
	const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

	const { GetUser, GetBasket } = useFetch();
	const { data: user } = GetUser();
	const { data: basketData } = GetBasket();
	const { username, contactPhone } = user ?? {};

	const onClickLogout = async () => {
		await Services.auth.logout();
		router.push(ROUTE.AUTH);
	};

	return (
		<Styled.Header>
			<Styled.Logo src="/logo.png" alt="Logo" width={60} height={60} />
			<Styled.Navigation navItems={NAV_ITEMS} />
			<Styled.Actions>
				{username && <Styled.Username>{username}</Styled.Username>}
				{user ? (
					<Dropdown content={[{ label: 'Logout', onClick: onClickLogout }]}>
						<Styled.AvatarContainer aria-label="User menu">
							<Styled.Avatar />
						</Styled.AvatarContainer>
					</Dropdown>
				) : (
					<Link href={ROUTE.AUTH} use={LinkUse.secondary}>
						Login
					</Link>
				)}
				<Styled.StoreContainer>
					{!!basketData?.items?.length && <Styled.Counter />}
					<Styled.Store
						role="button"
						tabIndex={0}
						aria-label="Open basket"
						onClick={() => setIsStoreModalOpen(!isStoreModalOpen)}
						onKeyDown={event => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								setIsStoreModalOpen(!isStoreModalOpen);
							}
						}}
					/>
				</Styled.StoreContainer>
				<Styled.MobileNavigation navItems={NAV_ITEMS} />
			</Styled.Actions>
			{isStoreModalOpen && (
				<BasketModal
					isOpen={isStoreModalOpen}
					handleClose={() => setIsStoreModalOpen(false)}
					user={{ username, contactPhone }}
				/>
			)}
		</Styled.Header>
	);
};
