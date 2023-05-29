import axios from '@/core/axios';
import { UpdateUser, User } from '@/types';

export const getMe = async (): Promise<User> => {
	return (await axios.get('users/me')).data;
};

export const updateMe = async (updateUser: UpdateUser) => {
	return await axios.patch('users/me', updateUser);
};
