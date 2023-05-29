import { ContactUsData } from '@/types';
import axios from '@/core/axios';

export const sendEmail = async (values: ContactUsData) => {
	await axios.post('/applications/create', values);
};
