import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
import { createServerAxios } from '@/core/serverAxios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const { data } = await createServerAxios().post('/auth/register', req.body);

		setCookie({ res }, '_token', data.token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			path: '/',
			maxAge: 60 * 60 * 24 * 7
		});

		return res.status(200).json({});
	} catch (err: any) {
		const status = err.response?.status ?? 500;
		const message = err.response?.data?.message ?? 'Registration failed';

		return res.status(status).json({ message });
	}
}
