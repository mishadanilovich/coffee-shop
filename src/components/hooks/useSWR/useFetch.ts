import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

import * as Services from '@/services';

export const useFetch = () => {
	return {
		GetUser: () =>
			useSWRImmutable('/user', async () => await Services.users.getMe(), {
				shouldRetryOnError: false
			}),
		GetBasket: () =>
			useSWR('/basket', async () => await Services.basket.getCurrent(), {
				shouldRetryOnError: false
			})
	};
};
