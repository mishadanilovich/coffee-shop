import { ROUTE } from './routes';
import { ANCHORS } from './anchors';

export const NAV_ITEMS = [
	{
		label: 'Главная',
		href: `/#${ANCHORS.HOME}`
	},
	{
		label: 'О нас',
		href: `/#${ANCHORS.ABOUT_US}`
	},
	{
		label: 'Меню',
		href: ROUTE.MENU
	},
	{
		label: 'Баристы',
		href: `/#${ANCHORS.BARISTAS}`
	},
	{
		label: 'Уроки',
		href: `/#${ANCHORS.LESSONS}`
	},
	{
		label: 'Контакты',
		href: `/#${ANCHORS.CONTACTS}`
	},
	{
		label: 'Блоги',
		href: `/#${ANCHORS.BLOGS}`
	}
];
