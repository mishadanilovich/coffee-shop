import { COFFEE_SHOP_NAME } from '@/components/constants';

export const getMetaTitle = (title?: string) =>
	title ? `${title} | ${COFFEE_SHOP_NAME}` : COFFEE_SHOP_NAME;
