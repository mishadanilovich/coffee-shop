import { destroyCookie } from 'nookies';
import axios from '@/core/axios';
import {
	LoginFormData,
	LoginResponseData,
	RegisterFromData,
	RegisterResponseData,
	User
} from '@/interfaces';

export const login = async (values: LoginFormData): Promise<LoginResponseData> => {
	return (await axios.post('/auth/login', values)).data;
};

export const register = async (values: RegisterFromData): Promise<RegisterResponseData> => {
	return (await axios.post('/auth/register', values)).data;
};

export const getMe = async (): Promise<User> => {
	return (await axios.get('users/me')).data;
};

export const logout = () => {
	destroyCookie(null, '_token', { path: '/' });
};
