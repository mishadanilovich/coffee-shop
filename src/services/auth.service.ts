import { LoginFormData, RegisterFromData } from '@/types';

const postJson = async (url: string, body: unknown) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});

	if (!res.ok) {
		const data = await res.json().catch(() => ({}));
		throw new Error(data.message ?? 'Request failed');
	}
};

export const login = async (values: LoginFormData): Promise<void> => {
	await postJson('/api/auth/login', values);
};

export const register = async (values: RegisterFromData): Promise<void> => {
	await postJson('/api/auth/register', values);
};

export const logout = async (): Promise<void> => {
	await fetch('/api/auth/logout', { method: 'POST' });
};
