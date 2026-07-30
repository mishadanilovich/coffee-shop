import type { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:7777';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { path, ...query } = req.query;
	const targetPath = Array.isArray(path) ? path.join('/') : path ?? '';
	const { _token } = parseCookies({ req });

	const hasBody = !['GET', 'HEAD'].includes(req.method ?? 'GET');

	try {
		const response = await axios.request({
			url: `${BASE_URL}/${targetPath}`,
			method: req.method as string,
			...(hasBody ? { data: req.body } : {}),
			params: query,
			headers: {
				...(_token ? { Authorization: `Bearer ${_token}` } : {}),
				...(hasBody ? { 'Content-Type': 'application/json' } : {})
			},
			validateStatus: () => true
		});

		return res.status(response.status).json(response.data);
	} catch (err) {
		return res.status(502).json({ message: 'Bad gateway' });
	}
}
