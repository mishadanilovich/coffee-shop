import { getMetaTitle } from './getTitle';

describe('getMetaTitle', () => {
	it('appends the shop name to a given title', () => {
		expect(getMetaTitle('Menu')).toBe('Menu | DOPPIO');
	});

	it('falls back to just the shop name when no title is given', () => {
		expect(getMetaTitle()).toBe('DOPPIO');
	});
});
