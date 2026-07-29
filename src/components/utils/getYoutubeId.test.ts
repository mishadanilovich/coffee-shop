import { getYoutubeId } from './getYoutubeId';

describe('getYoutubeId', () => {
	it('extracts the id from a youtu.be link', () => {
		expect(getYoutubeId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
	});

	it('returns undefined for a non-youtube url', () => {
		expect(getYoutubeId('https://vimeo.com/dQw4w9WgXcQ')).toBeUndefined();
	});

	it('returns undefined when no url is provided', () => {
		expect(getYoutubeId(undefined)).toBeUndefined();
	});

	it('returns undefined when the id segment is empty', () => {
		expect(getYoutubeId('https://youtu.be/')).toBeUndefined();
	});
});
