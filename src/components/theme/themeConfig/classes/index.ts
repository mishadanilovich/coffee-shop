import { spacing } from '../spacing';
import { card, section, styledLink } from './styles';

export const classes = {
	container: {
		padding: spacing(10, 35, 5)
	},
	section,
	contentCenter: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentBetween: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	card,
	styledLink
};
