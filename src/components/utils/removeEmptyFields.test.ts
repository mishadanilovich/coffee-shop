import { removeEmptyFields } from './removeEmptyFields';

describe('removeEmptyFields', () => {
	it('drops keys with a null value', () => {
		expect(removeEmptyFields({ a: 1, b: null, c: 'x' })).toEqual({ a: 1, c: 'x' });
	});

	it('keeps falsy but non-null values', () => {
		expect(removeEmptyFields({ a: 0, b: '', c: false })).toEqual({ a: 0, b: '', c: false });
	});

	it('returns an empty object when everything is null', () => {
		expect(removeEmptyFields({ a: null, b: null })).toEqual({});
	});
});
