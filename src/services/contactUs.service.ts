import { AxiosInstance } from 'axios';
import { ContactUsData } from '@/types';
import clientAxios from '@/core/axios';

export const sendEmail = async (values: ContactUsData, instance: AxiosInstance = clientAxios) => {
	await instance.post('/applications/create', values);
};
