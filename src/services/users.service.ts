import { AxiosInstance } from 'axios';
import clientAxios from '@/core/axios';
import { UpdateUser, User } from '@/types';

export const getMe = async (instance: AxiosInstance = clientAxios): Promise<User> => {
	return (await instance.get('users/me')).data;
};

export const updateMe = async (updateUser: UpdateUser, instance: AxiosInstance = clientAxios) => {
	return await instance.patch('users/me', updateUser);
};
