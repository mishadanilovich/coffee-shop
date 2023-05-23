import useSWRImmutable from 'swr/immutable';

import * as Services from '@/services';

export const useFetch = () => {
	return {
		GetUser: () => useSWRImmutable('/user', async () => await Services.users.getMe())
	};
};
