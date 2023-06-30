import { ROUTE } from './routes';
import { ANCHORS } from './anchors';

export const NAV_ITEMS = [
	{
		label: 'Home',
		href: `/#${ANCHORS.HOME}`
	},
	{
		label: 'About Us',
		href: `/#${ANCHORS.ABOUT_US}`
	},
	{
		label: 'Menu',
		href: ROUTE.MENU
	},
	{
		label: 'Baristas',
		href: `/#${ANCHORS.BARISTAS}`
	},
	{
		label: 'Lessons',
		href: `/#${ANCHORS.LESSONS}`
	},
	{
		label: 'Contacts',
		href: `/#${ANCHORS.CONTACTS}`
	},
	{
		label: 'Blogs',
		href: `/#${ANCHORS.BLOGS}`
	}
];
