import { Name } from '@/interfaces';

const wordsCapitalize = (str: string) =>
	str
		.replace(/\s+/g, ' ')
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

export const getFullName = (name: Name): string => {
	let { given: firstName, family: lastName } = name;

	if (!firstName && !lastName) {
		return '';
	}

	firstName = typeof firstName === 'string' ? wordsCapitalize(firstName) : '';
	lastName = typeof lastName === 'string' ? wordsCapitalize(lastName) : '';

	return `${firstName} ${lastName}`.trim();
};
