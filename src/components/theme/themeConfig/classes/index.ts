import { spacing } from '../spacing';
import { section } from './styles';

export const classes = {
	container: {
		padding: spacing(5, 35)
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
	}
};
