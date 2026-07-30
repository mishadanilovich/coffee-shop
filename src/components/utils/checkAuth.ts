import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { createServerAxios } from '@/core/serverAxios';
import { ROUTE } from '@/components/constants';

import * as Services from '@/services';

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
	const { _token } = nookies.get(ctx);
	const serverAxios = createServerAxios(_token);

	try {
		const user = await Services.users.getMe(serverAxios);

		return {
			user: user,
			serverAxios,
			props: {}
		};
	} catch (err) {
		return {
			redirect: {
				destination: ROUTE.AUTH,
				permanent: false
			}
		};
	}
};
