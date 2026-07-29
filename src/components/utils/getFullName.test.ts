import { getFullName } from './getFullName';

describe('getFullName', () => {
	it('capitalizes first and last name', () => {
		expect(getFullName('john doe')).toBe('John Doe');
	});

	it('collapses repeated whitespace', () => {
		expect(getFullName('john   doe')).toBe('John Doe');
	});

	it('handles a single word', () => {
		expect(getFullName('john')).toBe('John');
	});

	it('returns an empty string for empty input', () => {
		expect(getFullName('')).toBe('');
	});
});
