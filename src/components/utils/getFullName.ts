const wordsCapitalize = (str: string) =>
	str
		.replace(/\s+/g, ' ')
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

export const getFullName = (fullName: string): string => {
	if (!fullName) {
		return '';
	}
	const [given, family] = fullName.trim().split(' ');

	const firstName = wordsCapitalize(given);
	const lastName = family ? wordsCapitalize(family) : '';

	return `${firstName} ${lastName}`.trim();
};
