import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import axios from '@/core/axios';
import { ROUTE } from '@/components/constants';

import * as Services from '@/services';

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
	const { _token } = nookies.get(ctx);

	axios.defaults.headers.Authorization = 'Bearer ' + _token;

	try {
		const user = await Services.auth.getMe();

		return {
			user: user,
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
