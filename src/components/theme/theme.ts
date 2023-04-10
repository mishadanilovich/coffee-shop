import { zIndex, palette, typography, spacing, classes, borders } from './themeConfig';

export const theme = {
	palette,
	typography,
	spacing,
	zIndex,
	classes,
	borders
};

export type Theme = typeof theme;
