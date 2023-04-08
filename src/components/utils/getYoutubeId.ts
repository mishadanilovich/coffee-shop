export const getYoutubeId = (url?: string) => {
	if (!url) return;
	const lastIndex = url.lastIndexOf('/');

	const youtubeUrl = url.slice(0, lastIndex).includes('youtu.be');
	const youtubeId = url.slice(lastIndex + 1);

	if (!youtubeUrl || !youtubeId.trim()) return;

	return youtubeId;
};
