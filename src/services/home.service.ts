import axios from '@/core/axios';
import { Barista } from '@/interfaces';

export const getBaristas = async (): Promise<Barista[]> => {
	return (await axios.get('/baristas')).data;
};
