import { gridModule } from './module';

type SpacingArgument = number | string;

export interface Spacing {
	(value: SpacingArgument): string;
	(topBottom: SpacingArgument, rightLeft: SpacingArgument): string;
	(top: SpacingArgument, rightLeft: SpacingArgument, bottom: SpacingArgument): string;
	(
		top: SpacingArgument,
		right: SpacingArgument,
		bottom: SpacingArgument,
		left: SpacingArgument
	): string;
}

export const spacing: Spacing = (...args: SpacingArgument[]) => {
	if (!args || args.length > 4) {
		// eslint-disable-next-line no-console
		console.error('Spacing got wrong number of arguments');

		return '';
	}

	const values = args.map(item => {
		if (typeof item === 'string') {
			return item;
		}

		return `${item * gridModule}px`;
	});

	return values.join(' ');
};
